import * as React from "react";

import LoadingDisplay from "../status_tracker_feature/conditional_states/loadingDisplay";
import { render } from "@testing-library/react";

describe("LoadingDisplay", () => {
  it(`renders without crashing`, () => {
    const { container } = render(<LoadingDisplay />);

    expect(container.querySelector(`div`)).toBeInTheDocument();
  });
});
