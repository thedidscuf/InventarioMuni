'use client'

import { Prisma } from '@prisma/client'
import { useState, useEffect } from 'react'
import {
  Typography,
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Space,
} from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ProductsPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [products, setProducts] = useState<Prisma.ProductGetPayload<{}>[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingProduct, setEditingProduct] =
    useState<Prisma.ProductGetPayload<{}> | null>(null)
  const [form] = Form.useForm()

  const {
    data: productsData,
    isLoading,
    refetch,
  } = Api.product.findMany.useQuery({})
  const { mutateAsync: createProduct } = Api.product.create.useMutation()
  const { mutateAsync: updateProduct } = Api.product.update.useMutation()
  const { mutateAsync: deleteProduct } = Api.product.delete.useMutation()

  useEffect(() => {
    if (productsData) {
      setProducts(productsData)
    }
  }, [productsData])

  const showModal = (product: Prisma.ProductGetPayload<{}> | null = null) => {
    setEditingProduct(product)
    form.setFieldsValue(product || {})
    setIsModalVisible(true)
  }

  const handleOk = async () => {
    try {
      const values = await form.validateFields()
      if (editingProduct) {
        await updateProduct({ where: { id: editingProduct.id }, data: values })
        enqueueSnackbar('Product updated successfully', { variant: 'success' })
      } else {
        await createProduct({ data: values })
        enqueueSnackbar('Product created successfully', { variant: 'success' })
      }
      setIsModalVisible(false)
      form.resetFields()
      refetch()
    } catch (error) {
      enqueueSnackbar('Error saving product', { variant: 'error' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct({ where: { id } })
      enqueueSnackbar('Product deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Error deleting product', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => `$${price?.toFixed(2)}`,
    },
    {
      title: 'SKU',
      dataIndex: 'sku',
      key: 'sku',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Prisma.ProductGetPayload<{}>) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => showModal(record)}>
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Inventory Management</Title>
      <Text>View, add, edit, and delete products in the inventory.</Text>

      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => showModal()}
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        Add New Product
      </Button>

      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        loading={isLoading}
        style={{ marginTop: 16 }}
      />

      <Modal
        title={editingProduct ? 'Edit Product' : 'Add New Product'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: 'Please input the product name!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[
              { required: true, message: 'Please input the product price!' },
            ]}
          >
            <InputNumber
              style={{ width: '100%' }}
              formatter={value =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              parser={value => value!.replace(/\$\s?|(,*)/g, '')}
            />
          </Form.Item>
          <Form.Item name="sku" label="SKU">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
