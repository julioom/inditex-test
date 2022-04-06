import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ProductAction from "./product-action";

const props = {
	title: "prueba",
	value: 2000,
	onChange: jest.fn(),
	options: [
		{ code: 2001, name: "option 1" },
		{ code: 2000, name: "option 2" },
	],
};

test("renders title", () => {
	render(<ProductAction {...props} />);
	const title = screen.getByText("prueba:");
	expect(title).toBeInTheDocument();
});

test("renders select with selected option", () => {
	render(<ProductAction {...props} />);

	const options = screen.getAllByTestId("option-prueba");
	expect(options[0].selected).toBeFalsy();
	expect(options[1].selected).toBeTruthy();
});
