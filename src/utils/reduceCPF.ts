export const reducerCPF = (v: string) => {
		const punctuationless = v.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '')
		const finalString = punctuationless.replace(/\s{2,}/g, ' ')

		return finalString
}