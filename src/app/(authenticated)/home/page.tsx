'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { LockOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select, Space, Typography } from 'antd'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
const { Title, Text } = Typography

export default function LoginPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const [loading, setLoading] = useState(false)

  const { mutateAsync: loginMutation } = Api.user.create.useMutation()

  const handleLogin = async (values: {
    email: string
    password: string
    role: string
  }) => {
    setLoading(true)
    try {
      await loginMutation({ data: values })
      enqueueSnackbar('Login successful', { variant: 'success' })
      router.push('/home')
    } catch (error) {
      enqueueSnackbar('Login failed. Please check your credentials.', {
        variant: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  if (user) {
    router.push('/home')
    return null
  }

  return (
    <PageLayout layout="narrow">
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Title level={2}>Inventory System Login</Title>
        <Text>
          Please enter your credentials to access the inventory system.
        </Text>
        <Form
          form={form}
          name="login"
          onFinish={handleLogin}
          layout="vertical"
          style={{ maxWidth: 300, margin: '0 auto' }}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="role"
            rules={[{ required: true, message: 'Please select your role!' }]}
          >
            <Select placeholder="Select your role">
              <Select.Option value="admin">Admin</Select.Option>
              <Select.Option value="manager">Manager</Select.Option>
              <Select.Option value="user">User</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              icon={<LoginOutlined />}
              block
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </PageLayout>
  )
}
