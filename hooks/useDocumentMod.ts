import { useEffect } from "react";

const useDocumentMod = (cls: string) => {
	const isMultiMod = cls.includes(' ');

	const addSingle = () => {
		document.querySelector('body')?.classList.add(cls);
	}

	const addMulti = () => {
		cls.split(' ').map(c => {
			document.querySelector('body')?.classList.add(c);
		});
	}

	const removeSingle = () => {
		document.querySelector('body')?.classList.remove(cls);
	}

	const removeMulti = () => {
		cls.split(' ').map(c => {
			document.querySelector('body')?.classList.remove(c);
		});
	}

	useEffect(() => {
		isMultiMod ? addMulti() : addSingle();
		
		return () => {
			isMultiMod ? removeMulti() : removeSingle();
		}
	}, []);
}

export default useDocumentMod;