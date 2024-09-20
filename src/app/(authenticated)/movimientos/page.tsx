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
  Select,
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

export default function MovementsPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingMovement, setEditingMovement] =
    useState<Prisma.MovementGetPayload<{ include: { product: true } }> | null>(
      null,
    )
  const [form] = Form.useForm()

  const {
    data: movements,
    isLoading,
    refetch,
  } = Api.movement.findMany.useQuery({
    include: { product: true },
    orderBy: { dateCreated: 'desc' },
  })

  const { data: products } = Api.product.findMany.useQuery({})

  const { mutateAsync: createMovement } = Api.movement.create.useMutation()
  const { mutateAsync: updateMovement } = Api.movement.update.useMutation()
  const { mutateAsync: deleteMovement } = Api.movement.delete.useMutation()

  useEffect(() => {
    if (editingMovement) {
      form.setFieldsValue({
        ...editingMovement,
        productId: editingMovement.product?.id,
        date: dayjs(editingMovement.date).format('YYYY-MM-DD'),
      })
    } else {
      form.resetFields()
    }
  }, [editingMovement, form])

  const handleOpenModal = (
    movement: Prisma.MovementGetPayload<{
      include: { product: true }
    }> | null = null,
  ) => {
    setEditingMovement(movement)
    setIsModalVisible(true)
  }

  const handleCloseModal = () => {
    setIsModalVisible(false)
    setEditingMovement(null)
  }

  const handleSubmit = async (values: any) => {
    try {
      if (editingMovement) {
        await updateMovement({
          where: { id: editingMovement.id },
          data: { ...values, userId: user?.id },
        })
        enqueueSnackbar('Movement updated successfully', { variant: 'success' })
      } else {
        await createMovement({
          data: { ...values, userId: user?.id },
        })
        enqueueSnackbar('Movement created successfully', { variant: 'success' })
      }
      refetch()
      handleCloseModal()
    } catch (error) {
      enqueueSnackbar('Error saving movement', { variant: 'error' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteMovement({ where: { id } })
      enqueueSnackbar('Movement deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Error deleting movement', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Product',
      dataIndex: ['product', 'name'],
      key: 'product',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity: number) => quantity.toString(),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (
        _: any,
        record: Prisma.MovementGetPayload<{ include: { product: true } }>,
      ) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            onClick={() => handleOpenModal(record)}
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
            danger
          />
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Inventory Movements</Title>
      <Text>Track and manage stock changes</Text>

      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => handleOpenModal()}
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        Record New Movement
      </Button>

      <Table
        dataSource={movements}
        columns={columns}
        rowKey="id"
        loading={isLoading}
      />

      <Modal
        title={editingMovement ? 'Edit Movement' : 'Record New Movement'}
        open={isModalVisible}
        onCancel={handleCloseModal}
        footer={null}
      >
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item
            name="productId"
            label="Product"
            rules={[{ required: true, message: 'Please select a product' }]}
          >
            <Select>
              {products?.map(product => (
                <Select.Option key={product.id} value={product.id}>
                  {product.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ required: true, message: 'Please enter quantity' }]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true, message: 'Please select movement type' }]}
          >
            <Select>
              <Select.Option value="IN">In</Select.Option>
              <Select.Option value="OUT">Out</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: 'Please enter date' }]}
          >
            <Input type="date" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingMovement ? 'Update' : 'Create'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
