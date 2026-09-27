import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const geist = Geist({ subsets: ['latin', 'cyrillic'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Irwin Casino официальный сайт — играть онлайн, бонусы, слоты и рабочее зеркало',
  description: 'Irwin Casino: официальный сайт для игры онлайн, слоты и карточные развлечения, мобильный вход и рабочее зеркало. Изучите каталог, выберите темп и начинайте с понятной навигацией. Играйте осознанно.',
  generator: 'v0.app',
  alternates: { canonical: 'https://irwin13.vercel.app/' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
  themeColor: '#0b1424',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <link rel="canonical" href="https://irwin13.vercel.app/" />
        <meta name="theme-color" content="#0b1424" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
