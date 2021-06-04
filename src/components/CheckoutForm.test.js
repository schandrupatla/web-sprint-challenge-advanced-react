import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render (<CheckoutForm/>);
    const header = screen.queryByText(/checkout Form/i)
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render (<CheckoutForm/>);
    const form = {
        fNameSelected:"Sri",
        lNameSelected:"Chandrupatla",
        addressSelected:"3372 Bel Mira Way",
        citySelected:"San Jose",
        stateSelected:"California",
        zipSelected:"95135",
    }

    const fName = screen.getByLabelText(/First Name/i);
    userEvent.type(fName, form.fNameSelected);

    const lName = screen.getByLabelText(/Last Name/i);
    userEvent.type(lName, form.lNameSelected);

    const address = screen.getByLabelText(/Address:/i);
    userEvent.type(address, form.addressSelected);

    const city = screen.getByLabelText(/City:/i);
    userEvent.type(city, form.citySelected);

    const state = screen.getByLabelText(/State:/i);
    userEvent.type(state, form.stateSelected);
    
    const zip = screen.getByLabelText(/Zip:/i);
    userEvent.type(zip, form.zipSelected);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const msg = screen.getByTestId(/successMessage/i);
    expect(msg).toBeInTheDocument();
    

});
