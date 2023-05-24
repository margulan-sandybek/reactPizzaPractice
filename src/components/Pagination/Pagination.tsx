import React from 'react';
import ReactPaginate from 'react-paginate';
import module from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  onChangePage: any;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onChangePage,
}) => {
  return (
    <div>
      <ReactPaginate
        className={module.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(e) => {
          onChangePage(e.selected + 1);
        }}
        pageRangeDisplayed={4}
        pageCount={3} //тут мы захардкодили, потому что число страниц должно прийти с бэка
        forcePage={currentPage - 1}
      />
    </div>
  );
};

export default Pagination;
