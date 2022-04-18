// I did not write most of this.

const nToHex = (n: number) => {
	const hex = n.toString(16);
	return hex.length === 1 ? `0${hex}` : hex;
};

const RGBToHex = (r: number, g: number, b: number) => {
	return `#${nToHex(r)}${nToHex(g)}${nToHex(b)}`;
};

const hexToRGB = (hex: string) => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? [
	  parseInt(result[1], 16),
	  parseInt(result[2], 16),
	  parseInt(result[3], 16)
	] : null;
  }

export {
	RGBToHex,
	hexToRGB,
}