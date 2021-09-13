import { useState, useEffect, Dispatch, SetStateAction } from 'react';
export default function useSticky(defaultValue: string, key: string) {
	const [currVal, sCV] = useState(defaultValue);
	// To prevent desync with SSR, always start with the default value
	// then re-render immediately with updated values
	useEffect(() => {
		if (typeof window !== 'undefined') {
			let g = localStorage.getItem(key);
			if (g) {
				sCV(g);
			}
		}
	}, [key])
	useEffect(() => {
		if (typeof window !== 'undefined') { //ssr
			localStorage.setItem(key, currVal);
		}
	}, [currVal, key])
	return [currVal, sCV] as [string, Dispatch<SetStateAction<string>>];
}