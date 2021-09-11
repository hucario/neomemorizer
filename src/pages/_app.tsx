/** @jsxImportSource theme-ui */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui';
import Head from 'next/head'
import theme from '../styles/theme';
import Link from 'next/link'
import navStyles from '../styles/Navbar.module.css';

function MyApp({ Component, pageProps }: AppProps) {
return (<>
	<Head>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
		<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
	</Head>
	<ThemeProvider theme={theme}>
		<div className={navStyles.centerH}>
			<div className={navStyles.main}>
				<h1 className={navStyles.title} sx={{
					fontFamily: 'title',
					fontWeight: 'title',
					fontSize: '3rem'
				}}>NeoMemorizer</h1>
				<nav className={navStyles.actualNav}>
					<Link href='/'>Use</Link>
					<Link href='/settings'>Settings</Link>
					<Link href='/theme'>Theme</Link>
				</nav>
			</div>
			<Component {...pageProps} />
		</div>
	</ThemeProvider>
</>)
}
export default MyApp
