import express from "express";
import { HtmlConversionService } from "./services/htmlConversionService";

import { LcdConversionService } from "./services/lcdConversionService";

export const app: express.Application = express();

const lcdConversionService: LcdConversionService = new LcdConversionService();
const htmlConversionService: HtmlConversionService = new HtmlConversionService();

app.get("/", (req: express.Request, res: express.Response) => {
	res.send("Hello world!");
});

app.get("/convert/:digitalNumber", (req: express.Request, res: express.Response) => {
	res.send(
		htmlConversionService.convert(
			lcdConversionService.convert(
				parseInt(req.params.digitalNumber, 10),
			),
		),
	);
});
