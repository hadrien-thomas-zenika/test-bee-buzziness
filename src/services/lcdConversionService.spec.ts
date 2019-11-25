import { LcdConversionService } from "./lcdConversionService";
import { LcdNumber } from "./lcdNumber";

describe("LcdConversionService", () => {

	let lcdConversionService: LcdConversionService;

	beforeAll(() => {
		lcdConversionService = new LcdConversionService();
	});

	it("should display 0 to lcd format", () => {

		const numberToConvert: number = 0;

		const expectedConversion: LcdNumber = new LcdNumber(" _ ", "| |", "|_|");

		expect(lcdConversionService.convert(numberToConvert))
			.toEqual(expectedConversion);
	});
});
