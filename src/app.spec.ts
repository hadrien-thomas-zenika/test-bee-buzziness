import request from "supertest";

import { app } from "./app";

describe("App", () => {
	it("should answer Hello World!", async () => {
		const result: request.Response = await request(app)
			.get("/");

		const expectedStatus: number = 200;
		expect(result.text)
			.toEqual("Hello world!");
		expect(result.status)
			.toEqual(expectedStatus);
	});

	it("should display 0 to lcd format", async () => {

		const numberToConvert: number = 0;

		const expectedConversion: string =
			" _ <br>| |<br>|_|";

		const result: request.Response = await request(app)
			.get(`/convert/${numberToConvert}`);

		const expectedStatus: number = 200;
		expect(result.text)
			.toEqual(expectedConversion);
		expect(result.status)
			.toEqual(expectedStatus);
	});
});
