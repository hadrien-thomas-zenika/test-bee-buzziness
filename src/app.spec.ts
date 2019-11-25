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
});
