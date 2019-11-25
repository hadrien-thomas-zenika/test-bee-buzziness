import { LcdNumber } from "./lcdNumber";

export class ConsoleDisplayService {
	public display = (value: LcdNumber): string =>
		`${value.firstRow}\n${value.secondRow}\n${value.thirdRow}`
}
