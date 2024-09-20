import { Metadata } from 'next'
import { ClientLayout } from './client.layout'

export const metadata: Metadata = {
  title: 'InventarioMuni',
  description: 'InventarioMuni',
}

export default function RootLayout(props) {
  return (
    <>
      <ClientLayout {...props} />
    </>
  )
}
