import * as React from "react";

import ErrorDisplay from "../status_tracker_feature/conditional_states/errorDisplay";
import { render } from "@testing-library/react";

describe("ErrorDisplay", () => {
  it(`renders a required message prop`, () => {
    const siteMessage = { message: "Something went wrong, this is a test" };
    const { getByText } = render(<ErrorDisplay message={siteMessage} />);

    const message = getByText(siteMessage.message);

    expect(message).toBeInTheDocument();
  });
});
