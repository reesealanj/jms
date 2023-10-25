import type { Metadata } from 'next'

import './globals.css'
import 'react-modern-drawer/dist/index.css'

import { Inter } from 'next/font/google'

import { GlobalSearchProvider } from '@/context/global-search'
import { ModalProvider } from '@/context/modal'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ModalContainer } from '@/components/ui/modal/modal-container'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Johnson Marine',
  description: 'One stop shop for service and maintenance at Johnson Marine in Ontario, CA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <ModalProvider>
        <GlobalSearchProvider>
          <TooltipProvider>
            <body className={inter.className}>
              {children}
              <ModalContainer />
            </body>
          </TooltipProvider>
        </GlobalSearchProvider>
      </ModalProvider>
    </html>
  )
}
