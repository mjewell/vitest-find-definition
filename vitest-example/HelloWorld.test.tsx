import { expect, test, describe } from "vitest";
import { render } from "vitest-browser-react";
import HelloWorld from "./HelloWorld.jsx";
import { page } from "@vitest/browser/context";
import { screen } from "@testing-library/react";

["term", "definition"].forEach((role) => {
  describe(`findByRole(${role})`, () => {
    test("with vitest-browser-react", async () => {
      const { getByRole } = render(<HelloWorld />);
      await expect
        .element(getByRole(role, { name: "hello" }))
        .toHaveTextContent("world");
    });

    test("with vitest/browser/context", async () => {
      render(<HelloWorld />);
      await expect
        .element(page.getByRole(role, { name: "hello" }))
        .toHaveTextContent("world");
    });

    test("with @testing-library/react", async () => {
      render(<HelloWorld />);
      expect(screen.getByRole(role, { name: "hello" })).toHaveTextContent(
        "world"
      );
    });
  });
});
