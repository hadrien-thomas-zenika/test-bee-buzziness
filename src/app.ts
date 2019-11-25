import express from "express";

import { ConsoleDisplayService } from "./services/consoleDisplayService";
import { LcdConversionService } from "./services/lcdConversionService";
import { LcdNumber } from "./services/lcdNumber";

export const app: express.Application = express();

const lcdConversionService: LcdConversionService = new LcdConversionService();
const consoleDisplayService: ConsoleDisplayService = new ConsoleDisplayService();

app.get("/", (req: express.Request, res: express.Response) => {
	res.send("Hello world!");
});

app.get("/convert/:number", (req: express.Request, res: express.Response) => {

	const numberAsString: string = req.params.number;
	const lcdNumbers: LcdNumber[] = lcdConversionService.convert(
		numberAsString
		.split("")
		.map((digitAsString: string) => parseInt(digitAsString, 10)),
	);

	console.log(
		consoleDisplayService.display(
			lcdNumbers,
		),
	);

	res.send();
});
