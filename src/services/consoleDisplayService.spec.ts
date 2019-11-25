import { ConsoleDisplayService } from "./consoleDisplayService";
import { LcdNumber } from "./lcdNumber";

describe("ConsoleDisplayService", () => {

	let consoleDisplayService: ConsoleDisplayService;

	beforeAll(() => {
		consoleDisplayService = new ConsoleDisplayService();
	});

	it("should display 0 in lcd format", () => {

		const lcdNumberToDisplay: LcdNumber = new LcdNumber(" _ ", "| |", " _ ");

		const expectedConversion: string = " _ \n| |\n _ ";

		expect(consoleDisplayService.display(lcdNumberToDisplay))
			.toEqual(expectedConversion);
	});
});
