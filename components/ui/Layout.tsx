import { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import { useTranslation } from '../../hooks/useTranslation'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'juanzitelli.dev' }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-between">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/img/jzlogo.png" type="image/x-icon"></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <title>{title}</title>
      </Head>
      <header>
        <Navbar items={t.home.navbarItems} />
      </header>
      <main className="min-h-screen bg-gray-900">
        {children}
      </main>
      <Footer />

    </div>
  )
}

export default Layout
