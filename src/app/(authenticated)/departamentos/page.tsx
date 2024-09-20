'use client'

import { Prisma } from '@prisma/client'
import { useState, useEffect } from 'react'
import { Typography, Table, Button, Modal, Form, Input, Space } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function DepartmentsPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [departments, setDepartments] = useState<
    Prisma.DepartmentGetPayload<{}>[]
  >([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingDepartment, setEditingDepartment] =
    useState<Prisma.DepartmentGetPayload<{}> | null>(null)
  const [form] = Form.useForm()

  const {
    data: departmentsData,
    isLoading,
    refetch,
  } = Api.department.findMany.useQuery({})
  const { mutateAsync: createDepartment } = Api.department.create.useMutation()
  const { mutateAsync: updateDepartment } = Api.department.update.useMutation()
  const { mutateAsync: deleteDepartment } = Api.department.delete.useMutation()

  useEffect(() => {
    if (departmentsData) {
      setDepartments(departmentsData)
    }
  }, [departmentsData])

  const showModal = (department?: Prisma.DepartmentGetPayload<{}>) => {
    setEditingDepartment(department || null)
    form.setFieldsValue(department || {})
    setIsModalVisible(true)
  }

  const handleOk = async () => {
    try {
      const values = await form.validateFields()
      if (editingDepartment) {
        await updateDepartment({
          where: { id: editingDepartment.id },
          data: values,
        })
        enqueueSnackbar('Department updated successfully', {
          variant: 'success',
        })
      } else {
        await createDepartment({ data: values })
        enqueueSnackbar('Department created successfully', {
          variant: 'success',
        })
      }
      setIsModalVisible(false)
      form.resetFields()
      refetch()
    } catch (error) {
      enqueueSnackbar('Error saving department', { variant: 'error' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteDepartment({ where: { id } })
      enqueueSnackbar('Department deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Error deleting department', { variant: 'error' })
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
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Prisma.DepartmentGetPayload<{}>) => (
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
      <Title level={2}>Departments Management</Title>
      <Text>
        View, add, edit, and delete municipal departments to manage the
        organizational structure.
      </Text>

      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => showModal()}
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        Add Department
      </Button>

      <Table
        columns={columns}
        dataSource={departments}
        rowKey="id"
        loading={isLoading}
        pagination={{ pageSize: 10 }}
      />

      <Modal
        title={editingDepartment ? 'Edit Department' : 'Add Department'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => {
          setIsModalVisible(false)
          form.resetFields()
        }}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: 'Please input the department name!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
