export class LcdNumber {
	public readonly firstRow: string;
	public readonly secondRow: string;
	public readonly thirdRow: string;

	public constructor(
		firstRow: string,
		secondRow: string,
		thirdRow: string,
	) {
		this.firstRow = firstRow;
		this.secondRow = secondRow;
		this.thirdRow = thirdRow;
	}
}
