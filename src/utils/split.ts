

export function SplitValue(value: string, decimal: boolean) {
	const split = value.split(',')

	if (decimal) {
		return  split[0]
	} else {
		return split[1]
	}

}