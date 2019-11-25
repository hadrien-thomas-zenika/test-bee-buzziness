import { LcdDigit } from "./lcdDigit";

export class ConsoleDisplayConversionService {
	public display = (lcdDigits: LcdDigit[]): string => {
		return `${lcdDigits
			.map((lcdNumber: LcdDigit) => lcdNumber.firstRow)
			.reduce(this.reduceRow)}
${lcdDigits
			.map((lcdNumber: LcdDigit) => lcdNumber.secondRow)
			.reduce(this.reduceRow)}
${lcdDigits
			.map((lcdNumber: LcdDigit) => lcdNumber.thirdRow)
			.reduce(this.reduceRow)}`;
	}

	private reduceRow = (totalRow: string, lcdNumberRow: string, currentIndex: number): string => {
		if (currentIndex === 0) {
			return lcdNumberRow;
		}

		return `${totalRow} ${lcdNumberRow}`;
	}
}
