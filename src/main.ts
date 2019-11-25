import { ConsoleDisplayConversionService } from "./services/consoleDisplayConversionService";
import { LcdConversionService } from "./services/lcdConversionService";
import { LcdDigit } from "./services/lcdDigit";

const lcdConversionService: LcdConversionService = new LcdConversionService();
const consoleDisplayConversionService: ConsoleDisplayConversionService = new ConsoleDisplayConversionService();

const numberAsString: string = process.argv[2];

const lcdDigits: LcdDigit[] = lcdConversionService.convert(
	numberAsString
		.split("")
		.map((digitAsString: string) => parseInt(digitAsString, 10)),
);

console.log(
	consoleDisplayConversionService.display(
		lcdDigits,
	),
);
