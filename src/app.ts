import express from "express";

import { LcdConversionService } from "./services/lcdConversionService";

export const app: express.Application = express();

const lcdConversionService: LcdConversionService = new LcdConversionService();

app.get("/", (req: express.Request, res: express.Response) => {
	res.send("Hello world!");
});

app.get("/convert/:digitalNumber", (req: express.Request, res: express.Response) => {
	res.send(lcdConversionService.convert(parseInt(req.params.digitalNumber, 10))
		.replace(/\n/g, "<br>"));
});
