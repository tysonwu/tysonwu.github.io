import './globals.css'

export const metadata = {
  title: 'TyLab',
  description: 'TyLab',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
