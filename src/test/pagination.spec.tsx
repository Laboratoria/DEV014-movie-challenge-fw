import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../components/Pagination";

describe("componente de paginación", () => {
  it("se le da click a los botones correctamente", () => {
    const mockOnSelectPage = jest.fn();
    render(
      <Pagination
        currentPage={1}
        totalPages={6}
        onSelectPage={mockOnSelectPage}
      />
    );

    const buttons = screen.getAllByRole("button");
    buttons.forEach((button) => {
      fireEvent.click(button);
    });

    expect(mockOnSelectPage).toHaveBeenCalled();
  });
});
