import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import OptionButton from "../components/OptionButton";

// mocking router for option button to render fine
jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            prefetch: () => null,
        };
    },
}));

test("Renders Options component correctly", () => {
    render(
        <>
            <OptionButton name="Home" link="/" closeFunction={() => {}} />
            <OptionButton name="About Me" link="/" closeFunction={() => {}} />
            <OptionButton name="Contact" link="/" closeFunction={() => {}} />
            <OptionButton name="Projects" link="/" closeFunction={() => {}} />
        </>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
});
