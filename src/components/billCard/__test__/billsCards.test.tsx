import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { BillCard } from "../BillCard";

describe("BillsCards", () => {
  describe("Render", () => {
    test("Should render a card", async () => {
      const { queryAllByText } = render(<BillCard />);
      const items = await queryAllByText(/Parte a pagar/i);
      expect(items).toHaveLength(3);
    });
  });
});
