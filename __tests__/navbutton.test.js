import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavButton from "../components/NavButton";

test("Renders Navbar component correctly", () => {
    render(
        <NavButton
            type="submit"
            name={"Resume"}
            direction={"left"}
            style={"col-start-1 col-end-2"}
            func={(e) => {
                e.preventDefault();
            }}
        />
    );
    expect(screen.getByText("Resume")).toBeInTheDocument();
});
