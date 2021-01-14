import Layout from '../components/ui/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '../hooks/useTranslation'
import { useEffect, useState } from 'react'

const Home = () => {
  const { t } = useTranslation();

  const quotes = t.home.descriptions;

  const [activeIndex, setActiveIndex] = useState(0)


  useEffect(() => {
    const timer = window.setInterval(() => {

      setActiveIndex(prev =>
        prev + 1 >= quotes.length ? 0 : prev + 1
      )
    }, 5000)
    return () => {
      window.clearInterval(timer)
    }
  }, [quotes])

  const activeQuote = quotes[activeIndex]

  return (
    <Layout title={`Home`}>
      <div className="w-full h-screen bg-center bg-no-repeat bg-cover">
        <div className="w-full h-screen bg-opacity-50 flex justify-center items-center animate__animated animate__fadeIn">
          <div className=" lg:mx-4 md:mx-4 lg:mt-0 md:mt-0 mb pb-10 text-center text-white">
            <Image loading="lazy" layout="intrinsic" className="rounded-full my-10" height="160" width="160" src="/img/profile.jpg" />
            <h1 className="font-bold text-4xl md:text-7xl mb-4 sm:my-1 my-7">Juan Agustín Zitelli</h1>
            <h2 className="font-regular text-2xl md:text-3xl mx-5 mb-6 md:mt-5 ">{activeQuote}</h2>
            <div className="flex flex-col justify-evenly h-32 items-center md:flex-row">
              <Link href="/about">
                <a className=" bg-gray-900 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-gray-600 ">
                  {t.home.getToKnowMeButton}
                </a>
              </Link>
              <a href="" className="bg-gray-900 rounded-md font-bold text-white text-center transition duration-300 ease-in-out hover:bg-gray-600 px-4 py-3">
                {t.home.downloadCVButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
