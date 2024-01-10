import { describe, it, expect } from 'vitest'; // this is technically unnecessary, but es-lint gets mad w/o it
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";


import App from './App';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading", {name: /our first test/i}).textContent).toMatch(/our first test/i);
  });

  it("renders magnificent monkeys", () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(screen.getByRole("heading", {name: /radical rhinos/i}).textContent).toMatch(/radical rhinos/i);
  });
});