import { LcdConversionService } from "./lcdConversionService";
import { LcdDigit } from "./lcdDigit";

describe("LcdConversionService", () => {

	let lcdConversionService: LcdConversionService;

	beforeAll(() => {
		lcdConversionService = new LcdConversionService();
	});

	it("should display 0 to lcd format", () => {

		const digits: number[] = [
			0,
		];

		const expectedLcdDigits: LcdDigit[] = [
			new LcdDigit(" _ ", "| |", "|_|"),
		];

		expect(lcdConversionService.convert(digits))
			.toEqual(expectedLcdDigits);
	});

	it("should display 9 to lcd format", () => {

		const digits: number[] = [
			9,
		];

		const expectedLcdDigits: LcdDigit[] = [
			new LcdDigit(" _ ", "|_|", "  |"),
		];

		expect(lcdConversionService.convert(digits))
			.toEqual(expectedLcdDigits);
	});

	it("should display 12 to lcd format", () => {

		const digitsToConvert: number[] = [1, 2];

		const expectedLcdDigits: LcdDigit[] = [
			new LcdDigit("   ", "  |", "  |"),
			new LcdDigit(" _ ", " _|", "|_ "),
		];

		expect(lcdConversionService.convert(digitsToConvert))
			.toEqual(expectedLcdDigits);
	});
});
