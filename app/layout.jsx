import './globals.css'
import NavBar from '../components/NavBar'
import Script from 'next/script'

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
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}
