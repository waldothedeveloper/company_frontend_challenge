import * as React from "react";

import Layout from "../layout";
import { render } from "@testing-library/react";

describe("Layout", () => {
  it(`renders without crashing`, () => {
    const { container } = render(
      <Layout>
        <main>
          <h1>Hello Globus! </h1>
        </main>
      </Layout>
    );

    expect(container.querySelector(`h1`)).toBeInTheDocument();
  });

  it(`renders children`, () => {
    const text = `__Globus is awesome!__`;
    const { getByText } = render(
      <Layout>
        <main>
          <h1>{text}</h1>
        </main>
      </Layout>
    );
    const child = getByText(text);
    expect(child).toBeInTheDocument();
  });
});
