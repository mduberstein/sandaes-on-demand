import { render, screen, waitFor } from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mocks/server";

test("handles error for scoops and toppings routes", async () => {
  // overwriting the handlers from ../../mocks/handlers.js
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get("http://localhost:3030/toppings", (req, res, ctx) =>
      res(ctx.status(500))
    )
  );
  render(<OrderEntry />);

  await waitFor(async() => {
    const alerts = await screen.findAllByRole("alert"
    // , {
    //   name: "An unexpected error occured. Please try again later.",
    //   }
    );
    // console.log(alerts);
    expect(alerts).toHaveLength(2);
  });
});

test.skip('not a real test', () => {});
