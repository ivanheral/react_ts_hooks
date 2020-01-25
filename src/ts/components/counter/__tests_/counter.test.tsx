/*===================
  counter.test.tsx
 ===================*/
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../counter";
import Sum from "../../sum/sum";
import Main from "../../provider/provider";

describe("<Counter />", () => {
  test("Renders", () => {
    const { container } = render(
      <Main>
        <Counter />
      </Main>
    );
    const elem_p = container.querySelector("p");

    expect(elem_p.textContent).toEqual("Counter: 0");
  });

  test("Renders with click", async () => {
    const { container, getByText } = render(
      <Main>
        <Counter />
        <Sum />
      </Main>
    );
    fireEvent.click(getByText('ADD'));

    const elem_p = container.querySelector("p");

    expect(elem_p.textContent).toEqual("Counter: 1");
  });
});
