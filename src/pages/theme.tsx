import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useColorMode } from 'theme-ui'

const ThemePage: NextPage = () => {
	const [colorMode, setColorMode] = useColorMode()
	return (<>
			<Head>
				<title>NeoMemorizer - Theme customization</title>
				<meta name="description" content="Memorize blocks of text easily with NeoMemorizer." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<button
				onClick={(e) => {
				setColorMode(colorMode === 'default' ? 'dark' : 'default')
				}}>
				Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
			</button>
		</>)
}

export default ThemePage