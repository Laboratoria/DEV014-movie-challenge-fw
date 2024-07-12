import { render, screen, fireEvent } from "@testing-library/react";
import { Navigation } from "../components/Navigation";
import { Genre } from "../models/Movie";

describe("Componente Navigation", () => {
  const genreOptions: Genre[] = [
    { id: 1, value: "action", text: "Action" },
    { id: 2, value: "comedy", text: "Comedy" },
  ];

  const yearOptions: number[] = [2020, 2021, 2022];
  const onGenreChange = jest.fn();
  const onYearChange = jest.fn();
  const onSortByChange = jest.fn();
  const onClear = jest.fn();

  beforeEach(() => {
    render(
      <Navigation
        genreOptions={genreOptions}
        yearOptions={yearOptions}
        selectedGenre=""
        selectedYear=""
        sortBy=""
        onGenreChange={onGenreChange}
        onYearChange={onYearChange}
        onSortByChange={onSortByChange}
        onClear={onClear}
      />
    );
  });

  it("Renderiza y maneja la selección de género", () => {
    const elGenreSelect = screen.getByTestId("filterByGenre");

    fireEvent.change(elGenreSelect, { target: { value: "10" } });

    expect(onGenreChange).toHaveBeenCalledTimes(1);
  });

  it("Renderiza y maneja la selección de años", () => {
    const elYearSelect = screen.getByTestId("filterByYear");

    fireEvent.change(elYearSelect, { target: { value: "2000" } });

    expect(onYearChange).toHaveBeenCalledTimes(1);
  });

  it("Renderiza y maneja la selección de ordenamiento", () => {
    const elSortBySelect = screen.getByTestId("sortBy");

    fireEvent.change(elSortBySelect, { target: { value: "popularity.asc" } });

    expect(onSortByChange).toHaveBeenCalledTimes(1);
  });

  it("El boton de reset, cumple su función", async () => {
    const elGenreSelect: any = screen.getByTestId("filterByGenre");
    const elYearSelect = screen.getByTestId("filterByYear");
    const elSortBySelect = screen.getByTestId("sortBy");

    fireEvent.change(elGenreSelect, { target: { value: "10" } });
    fireEvent.change(elYearSelect, { target: { value: "2000" } });
    fireEvent.change(elSortBySelect, { target: { value: "popularity.asc" } });

    expect(onGenreChange).toHaveBeenCalled();
    expect(onYearChange).toHaveBeenCalled();
    expect(onSortByChange).toHaveBeenCalled();

    const elResetGenreFilter = screen.getByTestId("resetGenreFilter");
    const elResetYearFilter = screen.getByTestId("resetYearFilter");
    const elResetSortByFilter = screen.getByTestId("resetSortByFilter");

    fireEvent.click(elResetGenreFilter);
    fireEvent.click(elResetYearFilter);
    fireEvent.click(elResetSortByFilter);

    expect(onClear).toHaveBeenCalledTimes(3);
  });
});
