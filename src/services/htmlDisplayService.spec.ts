import { HtmlDisplayService } from "./htmlDisplayService";
import { LcdNumber } from "./lcdNumber";

describe("HtmlDisplayService", () => {

	let htmlDisplayService: HtmlDisplayService;

	beforeAll(() => {
		htmlDisplayService = new HtmlDisplayService();
	});

	it("should display a lcd number to html", () => {

		const numberToConvert: LcdNumber = new LcdNumber("abc", "def", "ghi");

		const expectedConversion: string = "abc<br>def<br>ghi";

		expect(htmlDisplayService.display(numberToConvert))
			.toEqual(expectedConversion);
	});
});
