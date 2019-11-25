import { HtmlConversionService } from "./htmlConversionService";

describe("HtmlConversionService", () => {

	let htmlConversionService: HtmlConversionService;

	beforeAll(() => {
		htmlConversionService = new HtmlConversionService();
	});

	it("should replace \\n by <br>", () => {

		const stringToConvert: string = "abc\ndef\nghi";

		const expectedConversion: string = "abc<br>def<br>ghi";

		expect(htmlConversionService.convert(stringToConvert))
			.toEqual(expectedConversion);
	});
});
