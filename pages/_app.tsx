import './../styles/index.css'
interface AppProps {
	Component: React.FC;
	pageProps: { [prop: string]: any }
}

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}

export default App