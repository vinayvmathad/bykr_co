import './globals.css'
import NavBar from '../components/NavBar'

export const metadata = {
  title: 'Bykr - Ride Smart',
  description: 'bykr.co - Device for bikes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
