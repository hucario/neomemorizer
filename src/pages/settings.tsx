import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Settings: NextPage = () => {
	return (<>
			<Head>
				<title>NeoMemorizer - Settings</title>
				<meta name="description" content="Memorize blocks of text easily with NeoMemorizer." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>

			</main>
		</>)
}

export default Settings

/**
 * To-do:
 * Swap between per-line | per-word
 * "Map" customization
 * 
 */