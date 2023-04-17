import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${nunito.className} text-rose-500 text-2xl`}>Hello airbnb!</div>
  )
}
