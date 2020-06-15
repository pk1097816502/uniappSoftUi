export function colorRegular(color){
	return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color);
}

export function rgbRegular(color){
	return /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.test(color);
}

export function rgbaRegular(color){
	return /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/.test(color);
}

export function colorType(color){
	if(colorRegular(color)){
		return "color";
	}
	if(rgbRegular(color)){
		return "rgb";
	}
	if(rgbaRegular(color)){
		return "rgba";
	}
	return error;
}