export class HtmlConversionService {
	public convert = (value: string): string =>
		value.replace(/\n/g, "<br>")
}
