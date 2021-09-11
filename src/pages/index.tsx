import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useColorMode } from 'theme-ui'

const Home: NextPage = () => {
	const [colorMode, setColorMode] = useColorMode()
	return (<>
			<Head>
				<title>NeoMemorizer</title>
				<meta name="description" content="Memorize blocks of text easily." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.hero}>
					<button
						onClick={(e) => {
						setColorMode(colorMode === 'default' ? 'dark' : 'default')
						}}>
						Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
					</button>
				</div>
			</main>
		</>)
}

export default Home
