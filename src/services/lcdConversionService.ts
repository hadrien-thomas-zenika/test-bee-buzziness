import { LcdNumber } from "./lcdNumber";

export class LcdConversionService {

	private readonly conversionTable: LcdNumber [] = [
		new LcdNumber(
			" _ ",
			"| |",
			"|_|",
		),
		new LcdNumber(
			"   ",
			"  |",
			"  |",
		),
		new LcdNumber(
			" _ ",
			" _|",
			"|_ ",
		),
		new LcdNumber(
			" _ ",
			" _|",
			" _|",
		),
		new LcdNumber(
			"|_|",
			"   ",
			"  |",
		),
		new LcdNumber(
			" _ ",
			"|_ ",
			" _|",
		),
		new LcdNumber(
			" _ ",
			"|_ ",
			"|_|",
		),
		new LcdNumber(
			" _ ",
			"  |",
			"  |",
		),
		new LcdNumber(
			" _ ",
			"|_|",
			"|_|",
		),
		new LcdNumber(
			" _ ",
			"|_|",
			"  |",
		),
	];
	public convert = (digitalNumber: number): LcdNumber =>
		this.conversionTable[digitalNumber]
}
