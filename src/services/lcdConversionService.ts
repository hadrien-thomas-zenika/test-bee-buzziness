export class LcdConversionService {
	public convert = (digitalNumber: number): string => {
		const lcdNumber: string =
			" _ \n| |\n|_|";

		return lcdNumber;
	}
}
