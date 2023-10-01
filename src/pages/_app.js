import { Manrope } from '@next/font/google'

import '@/styles/globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400']
})

const App = ({ Component, pageProps }) => {
  return (
    <main className={manrope.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default App
