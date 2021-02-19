import './../styles/index.css'
import { QueryClient, QueryClientProvider } from "react-query";
interface AppProps {
	Component: React.FC;
	pageProps: { [prop: string]: any }
}

const App = ({ Component, pageProps }: AppProps) => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />
		</QueryClientProvider>
	)
}

export default App