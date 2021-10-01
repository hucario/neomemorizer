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
	<ThemeProvider theme={theme}>
		<div className={navStyles.centerH}>
			<div className={navStyles.main}>
				<h1 className={navStyles.title} sx={{
					fontFamily: 'title',
					fontWeight: 'title',
					fontSize: '3rem'
				}}>NeoMemorizer</h1>
				{/*				<nav className={navStyles.actualNav}>
					<Link href='/'>Use</Link>
					<Link href='/settings'>Settings</Link>
					<Link href='/theme'>Theme</Link>
				</nav>*/null}
			</div>
			<Component {...pageProps} />
		</div>
	</ThemeProvider>
</>)
}
export default MyApp
