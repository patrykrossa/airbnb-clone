import Modal from '@/components/modals/Modal'
import RegisterModal from '@/components/modals/RegisterModal'
import Navbar from '@/components/navbar/Navbar'
import ToasterProvider from '@/providers/ToasterProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <ToasterProvider />
    <RegisterModal />
    <Navbar />
    <Component {...pageProps}/>
  </div>
}
