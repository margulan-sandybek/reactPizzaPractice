import React from 'react';
import ReactPaginate from 'react-paginate';
import module from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onChangePage,
}) => (
  <ReactPaginate
    className={module.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event) => {
      onChangePage(event.selected + 1);
    }}
    pageRangeDisplayed={4}
    pageCount={3} //тут мы захардкодили, потому что число страниц должно прийти с бэка
    forcePage={currentPage - 1}
  />
);

export default Pagination;
