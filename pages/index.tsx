import Layout from '../components/ui/Layout'
import { useTranslation } from '../hooks/useTranslation'

const Home = () => {
  const { t } = useTranslation();
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      {`${t.description} 👋`}
    </Layout>
  )
}

export default Home
