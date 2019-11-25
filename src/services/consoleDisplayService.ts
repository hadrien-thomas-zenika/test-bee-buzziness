import { LcdNumber } from "./lcdNumber";

export class ConsoleDisplayService {
	public display = (lcdNumbers: LcdNumber[]): string => {
		return `${lcdNumbers
			.map((lcdNumber: LcdNumber) => lcdNumber.firstRow)
			.reduce(this.reduceRow)}
${lcdNumbers
			.map((lcdNumber: LcdNumber) => lcdNumber.secondRow)
			.reduce(this.reduceRow)}
${lcdNumbers
			.map((lcdNumber: LcdNumber) => lcdNumber.thirdRow)
			.reduce(this.reduceRow)}`;
	};

	private reduceRow = (totalRow: string, lcdNumberRow: string, currentIndex: number): string => {
		if (currentIndex === 0) {
			return lcdNumberRow;
		}

		return `${totalRow} ${lcdNumberRow}`;
	};
}
