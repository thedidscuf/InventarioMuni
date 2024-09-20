'use client'

import { Prisma } from '@prisma/client'
import { useState } from 'react'
import {
  Typography,
  List,
  Button,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Space,
} from 'antd'
import { FileOutlined, DownloadOutlined, PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ReportsPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const {
    data: reports,
    isLoading,
    refetch,
  } = Api.report.findMany.useQuery({
    include: { createdBy: true },
  })

  const { mutateAsync: createReport } = Api.report.create.useMutation()

  const handleGenerateReport = async (values: any) => {
    try {
      await createReport({
        data: {
          name: values.name,
          description: values.description,
          createdById: user?.id,
        },
      })
      enqueueSnackbar('Report generated successfully', { variant: 'success' })
      setIsModalVisible(false)
      form.resetFields()
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to generate report', { variant: 'error' })
    }
  }

  const handleExportReport = (fileUrl: string | undefined) => {
    if (fileUrl) {
      window.open(fileUrl, '_blank')
    } else {
      enqueueSnackbar('No file available for export', { variant: 'info' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Inventory Reports</Title>
      <Text>View, generate, and export inventory analytics reports.</Text>

      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', marginTop: 24 }}
      >
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsModalVisible(true)}
        >
          Generate New Report
        </Button>

        <List
          loading={isLoading}
          itemLayout="horizontal"
          dataSource={reports}
          renderItem={report => (
            <List.Item
              actions={[
                <Button
                  key="export"
                  icon={<DownloadOutlined />}
                  onClick={() => handleExportReport(report.fileUrl)}
                >
                  Export
                </Button>,
              ]}
            >
              <List.Item.Meta
                avatar={<FileOutlined style={{ fontSize: 24 }} />}
                title={report.name}
                description={
                  <>
                    <Text>{report.description}</Text>
                    <br />
                    <Text type="secondary">
                      Created by: {report.createdBy?.name} on{' '}
                      {dayjs(report.dateCreated).format('MMMM D, YYYY')}
                    </Text>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </Space>

      <Modal
        title="Generate New Report"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleGenerateReport} layout="vertical">
          <Form.Item
            name="name"
            label="Report Name"
            rules={[{ required: true, message: 'Please enter a report name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please enter a description' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Generate Report
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
