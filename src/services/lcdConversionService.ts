import { LcdDigit } from "./lcdDigit";

export class LcdConversionService {

	private readonly conversionTable: LcdDigit [] = [
		new LcdDigit(
			" _ ",
			"| |",
			"|_|",
		),
		new LcdDigit(
			"   ",
			"  |",
			"  |",
		),
		new LcdDigit(
			" _ ",
			" _|",
			"|_ ",
		),
		new LcdDigit(
			" _ ",
			" _|",
			" _|",
		),
		new LcdDigit(
			"   ",
			"|_|",
			"  |",
		),
		new LcdDigit(
			" _ ",
			"|_ ",
			" _|",
		),
		new LcdDigit(
			" _ ",
			"|_ ",
			"|_|",
		),
		new LcdDigit(
			" _ ",
			"  |",
			"  |",
		),
		new LcdDigit(
			" _ ",
			"|_|",
			"|_|",
		),
		new LcdDigit(
			" _ ",
			"|_|",
			"  |",
		),
	];
	public convert = (digits: number[]): LcdDigit[] =>
		digits.map((digit: number) => this.conversionTable[digit])
}
