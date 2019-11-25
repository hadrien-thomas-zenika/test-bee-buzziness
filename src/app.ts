import express from "express";
import { HtmlDisplayService } from "./services/htmlDisplayService";

import { LcdConversionService } from "./services/lcdConversionService";

export const app: express.Application = express();

const lcdConversionService: LcdConversionService = new LcdConversionService();
const htmlDisplayService: HtmlDisplayService = new HtmlDisplayService();

app.get("/", (req: express.Request, res: express.Response) => {
	res.send("Hello world!");
});

app.get("/convert/:digitalNumber", (req: express.Request, res: express.Response) => {
	res.send(
		htmlDisplayService.display(
			lcdConversionService.convert(
				parseInt(req.params.digitalNumber, 10),
			),
		),
	);
});
