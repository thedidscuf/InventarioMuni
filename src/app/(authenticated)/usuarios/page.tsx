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
  Select,
  Space,
} from 'antd'
import {
  UserOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function UsersPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [users, setUsers] = useState<Prisma.UserGetPayload<{}>[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingUser, setEditingUser] =
    useState<Prisma.UserGetPayload<{}> | null>(null)
  const [form] = Form.useForm()

  const { data: usersData, isLoading, refetch } = Api.user.findMany.useQuery({})
  const { mutateAsync: createUser } = Api.user.create.useMutation()
  const { mutateAsync: updateUser } = Api.user.update.useMutation()
  const { mutateAsync: deleteUser } = Api.user.delete.useMutation()

  useEffect(() => {
    if (usersData) {
      setUsers(usersData)
    }
  }, [usersData])

  const handleAddUser = () => {
    setEditingUser(null)
    form.resetFields()
    setIsModalVisible(true)
  }

  const handleEditUser = (user: Prisma.UserGetPayload<{}>) => {
    setEditingUser(user)
    form.setFieldsValue(user)
    setIsModalVisible(true)
  }

  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUser({ where: { id: userId } })
      enqueueSnackbar('User deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete user', { variant: 'error' })
    }
  }

  const handleModalOk = async () => {
    try {
      const values = await form.validateFields()
      if (editingUser) {
        await updateUser({ where: { id: editingUser.id }, data: values })
        enqueueSnackbar('User updated successfully', { variant: 'success' })
      } else {
        await createUser({ data: values })
        enqueueSnackbar('User created successfully', { variant: 'success' })
      }
      setIsModalVisible(false)
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to save user', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Global Role',
      dataIndex: 'globalRole',
      key: 'globalRole',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Prisma.UserGetPayload<{}>) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEditUser(record)}
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteUser(record.id)}
            danger
          />
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>
        <UserOutlined /> User Management
      </Title>
      <Text>Manage system users and their access to the inventory system.</Text>

      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleAddUser}
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        Add New User
      </Button>

      <Table
        columns={columns}
        dataSource={users}
        rowKey="id"
        loading={isLoading}
        style={{ marginTop: 16 }}
      />

      <Modal
        title={editingUser ? 'Edit User' : 'Add New User'}
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input the name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please input the email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="globalRole"
            label="Global Role"
            rules={[
              { required: true, message: 'Please select the global role!' },
            ]}
          >
            <Select>
              <Select.Option value="ADMIN">Admin</Select.Option>
              <Select.Option value="USER">User</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: 'Please select the status!' }]}
          >
            <Select>
              <Select.Option value="ACTIVE">Active</Select.Option>
              <Select.Option value="INACTIVE">Inactive</Select.Option>
            </Select>
          </Form.Item>
          {!editingUser && (
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: 'Please input the password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </PageLayout>
  )
}
