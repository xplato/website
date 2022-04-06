import { useEffect } from "react";


const useBodyModifier = (value: any) => {
	useEffect(() => {
		if (value) {
			document.body.classList.add(value);
		}

		return () => {
			document.body.classList.remove(value);
		}
	}, [value]);
}

export default useBodyModifier;