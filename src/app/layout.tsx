import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

import { Toaster } from 'sonner'
import { ThemeProvider } from '@/providers/theme-provider'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Real Estate App',
  description: 'The connected workspace where better, faster work happens.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${font.className} ${'theme-zinc'}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster richColors />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
