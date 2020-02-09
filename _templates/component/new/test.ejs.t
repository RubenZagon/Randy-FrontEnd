---
to: src/components/<%= name %>/__test__/<%= name %>.test.tsx
---
import React from "react";
import { fireEvent, render } from "@testing-library/react";


describe("<%= name %> - Component", () => {
  describe("Render", () => {
    test("Should render", async () => {
      /*
      const { queryAllByText } = render(<BillCard />);
      const items = await queryAllByText(/Parte a pagar/i);
      expect(items).toHaveLength(3);
      */
    });
  });
});
