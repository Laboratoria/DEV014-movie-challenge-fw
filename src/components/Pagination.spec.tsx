import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "./Pagination";

describe("componente de paginación", () => {
  it("se le puede dar click a lor botones correctamente", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={6}
        onSelectPage={() => {}}
      ></Pagination>
    );
    const buttons = screen.getAllByRole("button");
    buttons.forEach((button) => {
      fireEvent.click(button);
      screen.debug();
    });
  });
});
