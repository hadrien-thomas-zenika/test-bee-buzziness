import { ConsoleDisplayService } from "./consoleDisplayService";
import { LcdNumber } from "./lcdNumber";

describe("ConsoleDisplayService", () => {

	let consoleDisplayService: ConsoleDisplayService;

	beforeAll(() => {
		consoleDisplayService = new ConsoleDisplayService();
	});

	it("should display 0 in lcd format", () => {

		const lcdNumbers: LcdNumber[] = [
			new LcdNumber(" _ ", "| |", " _ "),
		];

		const expectedDisplay: string[] = [
			" _ \n| |\n _ ",
		];

		expect(consoleDisplayService.display(lcdNumbers))
			.toEqual(expectedDisplay);
	});

	it("should display 34 in lcd format", () => {

		const lcdNumbers: LcdNumber[] = [
			new LcdNumber("  _", " _|", " _|"),
			new LcdNumber("  ", "|_|", "  |"),
		];

		const expectedConversion: string = "  _    \n _| |_|\n _|  |";

		expect(consoleDisplayService.display(lcdNumbers))
			.toEqual(expectedConversion);
	});
});
