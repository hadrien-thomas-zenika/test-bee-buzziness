import { LcdConversionService } from "./lcdConversionService";

describe("LcdConversionService", () => {

	let lcdConversionService: LcdConversionService;

	beforeAll(() => {
		lcdConversionService = new LcdConversionService();
	});

	it("should convert 0 to lcd format", () => {

		const numberToConvert: number = 0;

		const expectedConversion: string =
			" _ \n| |\n|_|";

		expect(lcdConversionService.convert(numberToConvert))
			.toEqual(expectedConversion);
	});
});
