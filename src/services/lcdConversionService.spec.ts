import { LcdConversionService } from "./lcdConversionService";
import { LcdNumber } from "./lcdNumber";

describe("LcdConversionService", () => {

	let lcdConversionService: LcdConversionService;

	beforeAll(() => {
		lcdConversionService = new LcdConversionService();
	});

	it("should display 0 to lcd format", () => {

		const digits: number[] = [
			0,
		];

		const expectedLcdNumbers: LcdNumber[] = [
			new LcdNumber(" _ ", "| |", "|_|"),
		];

		expect(lcdConversionService.convert(digits))
			.toEqual(expectedLcdNumbers);
	});

	it("should display 9 to lcd format", () => {

		const digits: number[] = [
			9,
		];

		const expectedLcdNumbers: LcdNumber[] = [
			new LcdNumber(" _ ", "|_|", "  |"),
		];

		expect(lcdConversionService.convert(digits))
			.toEqual(expectedLcdNumbers);
	});

	it("should display 12 to lcd format", () => {

		const digitsToConvert: number[] = [1, 2];

		const expectedLcdNumbers: LcdNumber[] = [
			new LcdNumber("   ", "  |", "  |"),
			new LcdNumber(" _ ", " _|", "|_ "),
		];

		expect(lcdConversionService.convert(digitsToConvert))
			.toEqual(expectedLcdNumbers);
	});
});
