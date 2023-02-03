import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Initial conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmationButton = screen.getByRole("button", {
    name: /confirm order/i,
  });
  expect(confirmationButton).toBeDisabled(); 
});

test("Checkbox enables button on first click and disables on second click", () => {
  const user = userEvent.setup();

  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  user.click(checkbox);
  expect(confirmButton).toBeEnabled();

  user.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
