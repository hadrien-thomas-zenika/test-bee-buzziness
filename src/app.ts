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

app.get("/convert/:digitalNumber", (req: express.Request, res: express.Response) => {

	const lcdNumber: LcdNumber = lcdConversionService.convert(
		parseInt(req.params.digitalNumber, 10),
	);

	console.log(
		consoleDisplayService.display(
			lcdNumber,
		),
	);

	res.send();
});
