import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Ignacio Curbelo',
    default:
      'Ignacio Curbelo - UX|UI designer aspiring Product Designer',
  },
  description:
    'I’m Ignacio, graphic and uxui freelance designer, arpiring product designing. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.',
  icons: { icon: '/favicon2.ico' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
