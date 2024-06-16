import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Project from "../components/Project";

test("Renders Project component correctly", () => {
    render(
        <Project
            key="1"
            img="public/projects/full_stack_development/ieee_ras.PNG"
            technologies={"Testing description | Test, test"}
            title="Test Project"
            link="https://test.com"
        />
    );
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("Testing description")).toBeInTheDocument();
    expect(screen.getByText("Test, test")).toBeInTheDocument();
});
