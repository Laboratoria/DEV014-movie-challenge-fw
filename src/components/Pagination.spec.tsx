import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import PaginationComponent from './Pagination';

describe('PaginationComponent', () => {
  test('renders pagination component with page numbers', () => {
    render(<PaginationComponent currentPage={1} totalPages={5} onSelectPage={() => {}} />);

    // Verifica que los botones de paginación están en el documento
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('renders first and last buttons', () => {
    render(<PaginationComponent currentPage={1} totalPages={5} onSelectPage={() => {}} />);

    // Verifica que los botones de "Primero" y "Último" están en el documento
    expect(screen.getByText('«')).toBeInTheDocument();
    expect(screen.getByText('»')).toBeInTheDocument();
  });
});
