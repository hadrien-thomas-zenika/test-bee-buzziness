export class LcdNumber {
	public readonly firstRow: string;
	public readonly secondRow: string;
	public readonly thirdRow: string;

	public constructor(
		row1: string,
		row2: string,
		row3: string,
	) {
		this.firstRow = row1;
		this.secondRow = row2;
		this.thirdRow = row3;
	}
}
