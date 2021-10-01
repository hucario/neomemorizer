/** @jsxImportSource theme-ui */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import useSticky from '../useSticky'



const Home: NextPage = () => {
	const [stageOn, sSO] = useSticky('0', 'stageOn');
	const [text, setText] = useSticky(
		JSON.stringify([
    `Man is the eel. The Jehovah hypothesis bores me. It's good for nothing except to produce people with skinny bodies and empty heads. There is neither good or evil, only vegetarians. I don't allow myself to be beguiled by nonsense. But there should be something for those beneath us, the barefooted knife-grinders and other miserable souls. They're given myths and chimeras for nourishment, about the Soul, immortality, paradise, and stars. They munch on it, spread it on their dry bread. He who has nothing else has the good Lord, the least good he could have.`
]),
	'stages')
	const [mode, setMode] = useSticky('0', 'mode')
	const stages = JSON.parse(text);
	const thisStage: string = stages[parseInt(stageOn)] ?? '';
	const thisStageSpl: string[] = thisStage.replace(/  /g, ' ').split(' ');

	/** Index of thisStage that I'm currently on  */
	const [wordOn, sWO] = useSticky('0', 'wordOn');
	const [wordElems, sWE] = useState<null | unknown[]>(null)
	useEffect(() => {
		sWE(thisStage.split(' ').map((e, i) => {
			console.log(parseInt(mode));
			console.log(Math.random() < (parseInt(mode) / 10))
			return (<><span key={i} className={
				(Math.random() < (parseInt(mode) / 10)) ? styles.invisible : ''
			}>{e}</span> </>)
		}))
	}, [sWE, thisStage, mode])
	const wordRef = useRef<null | HTMLDivElement>(null);
	const [inpVal, sIV] = useState('');
	const underlineRef = useRef<null | HTMLDivElement>(null);
	const underlineTo = useCallback((ind: number) => {
		let lastLine = -100;
		let tempLines: number[] = [];
		if (!wordRef.current || !underlineRef.current) {
			return;
		}
		[...wordRef.current.children].slice(1).map((e) => {
			if (!(e instanceof HTMLElement)) {
				return;
			}
			if (e.offsetTop === lastLine) {
				tempLines[tempLines.length-1] && tempLines[tempLines.length-1]++;
			} else {
				lastLine = e.offsetTop;
				tempLines.push(1)
			}
		})
		let vchar = 0;
		let hchar = 0;
		let nind = ind;
		for (let vind = 0; vind < tempLines.length; vind++) {
			if (nind - tempLines[vind] >= 0) {
				nind -= tempLines[vind];
			} else {
				vchar = vind;
				break;
			}
		}
	
	
		thisStageSpl.slice(ind-nind, ind).forEach(b => {
			hchar += b.length + 1;
		});
	
		underlineRef.current.style.transform = (`translate(calc(1em + ${1 + hchar}ch), ${(2.05 + vchar*1.4)}rem) scaleX(${thisStageSpl[ind]?.length})`);
	}, [thisStageSpl, underlineRef])

	const listener = useRef<boolean>(false);
	if (typeof window !== 'undefined' && !listener.current) {
		window.addEventListener('resize', () => {
			underlineTo(parseInt(wordOn));
		})
		listener.current = true;
	}
	useEffect(() => {
		underlineTo(parseInt(wordOn));
	}, [wordOn, underlineTo])

	return (<>
			<Head>
				<title>NeoMemorizer</title>
				<meta name="description" content="Memorize blocks of text easily." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main} sx={{
				fontFamily: 'container',
				fontWeight: 'container'
			}}>
				<div className={styles.progressTop} style={{
					transform: `scaleX(${parseInt(stageOn) / stages.length})`
				}} />
				<div className={styles.textContainer} ref={wordRef}>
					<div ref={underlineRef} className={styles.underline}/>
					{wordElems}
				</div>
				<div className={styles.progressBottom} style={{
					transform: `scaleX(${parseInt(wordOn) / thisStageSpl.length})`
				}} />
			</main>
			<input
				className={styles.inp}
				sx={{
					fontFamily: 'input',
					fontWeight: 'input'
				}}
				value={inpVal}
				onChange={(e) => {
					if (e.target.value.toLowerCase() === thisStageSpl[parseInt(wordOn)]?.toLowerCase() + ' ') {
						sIV('');
						sWO((parseInt(wordOn) + 1) + '');
						if (wordRef.current) {
							let n = wordRef.current.children[parseInt(wordOn) + 1];
							if (n && n.classList.contains(styles.invisible)) {
								n.classList.add(styles.revisible);
								n.classList.remove(styles.invisible);
							}
						}
						if (parseInt(wordOn) + 1 >= thisStageSpl.length) {
							setMode((parseInt(mode) + 1) + '')
							sWO('0');
							if (wordRef.current) {
								[...wordRef.current.children].forEach(e => {
									e.classList.remove(styles.revisible);
								})
							}
							if (parseInt(mode) > 9) {
								sSO((parseInt(stageOn) + 1) + '');
								setMode('0');
								if (parseInt(stageOn) + 1 >= stages.length) {
									alert('you win or something');
									sSO('0');
								}
							}

						}
						return;
					}
					sIV(e.target.value);
				}}
			/>
		</>)
}

export default Home
