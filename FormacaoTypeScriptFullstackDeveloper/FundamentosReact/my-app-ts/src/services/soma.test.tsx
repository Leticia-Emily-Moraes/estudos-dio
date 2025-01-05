import { soma } from "./soma";
import '@testing-library/jest-dom';

describe("soma", () => {
	it("deve somar 1 ao número informado", () => {
		const value = soma(1);
		expect(value).toBe(2);
	});
});
