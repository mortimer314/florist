import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'فروشگاه گل و گیاه | Florist',
  description: 'فروشگاه اینترنتی انواع گل و گیاه آپارتمانی و زینتی -- florist of flovwer and green',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
