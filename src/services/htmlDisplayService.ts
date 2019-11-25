import { LcdNumber } from "./lcdNumber";

export class HtmlDisplayService {
	public display = (value: LcdNumber): string => {
		return `${value.firstRow}<br>${value.secondRow}<br>${value.thirdRow}`;
	}
}
