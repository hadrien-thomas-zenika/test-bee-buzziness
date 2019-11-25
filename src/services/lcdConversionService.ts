import { LcdNumber } from "./lcdNumber";

export class LcdConversionService {
	public convert = (digitalNumber: number): LcdNumber => {
		const firstRow: string = " _ ";
		const secondRow: string = "| |";
		const thirdRow: string = "|_|";

		return new LcdNumber(firstRow, secondRow, thirdRow);
	}
}
