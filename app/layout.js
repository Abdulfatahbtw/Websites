import './globals.css'

export const metadata = {
  title: 'Digital Agency',
  description: 'made by nmrood',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
