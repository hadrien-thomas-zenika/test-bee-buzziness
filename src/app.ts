import express from "express";

import { ConsoleDisplayConversionService } from "./services/consoleDisplayConversionService";
import { LcdConversionService } from "./services/lcdConversionService";
import { LcdDigit } from "./services/lcdDigit";

export const app: express.Application = express();

const lcdConversionService: LcdConversionService = new LcdConversionService();
const consoleDisplayConversionService: ConsoleDisplayConversionService = new ConsoleDisplayConversionService();

app.get("/", (req: express.Request, res: express.Response) => {
	res.send("Hello world!");
});

app.get("/convert/:number", (req: express.Request, res: express.Response) => {

	const numberAsString: string = req.params.number;
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

	res.send();
});
