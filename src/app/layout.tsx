import Providers from './providers'
import './globals.css'
import Header from './header'

export const metadata = {
  title: 'Next.js tutorial',
  description: 'Tutorail by Reffect',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
