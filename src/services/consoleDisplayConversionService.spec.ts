import { ConsoleDisplayConversionService } from "./consoleDisplayConversionService";
import { LcdDigit } from "./lcdDigit";

describe("ConsoleDisplayConversionService", () => {

	let consoleDisplayConversionService: ConsoleDisplayConversionService;

	beforeAll(() => {
		consoleDisplayConversionService = new ConsoleDisplayConversionService();
	});

	it("should display 0 in lcd format", () => {

		const lcdDigits: LcdDigit[] = [
			new LcdDigit(" _ ", "| |", " _ "),
		];

		const expectedDisplay: string = " _ \n| |\n _ ";

		expect(consoleDisplayConversionService.display(lcdDigits))
			.toEqual(expectedDisplay);
	});

	it("should display 34 in lcd format", () => {

		const lcdDigits: LcdDigit[] = [
			new LcdDigit("  _", " _|", " _|"),
			new LcdDigit("   ", "|_|", "  |"),
		];

		const expectedConversion: string = "  _    \n _| |_|\n _|   |";

		expect(consoleDisplayConversionService.display(lcdDigits))
			.toEqual(expectedConversion);
	});
});
