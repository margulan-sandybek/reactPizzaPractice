import React from 'react'
import ReactPaginate from 'react-paginate'
import module from './Pagination.module.scss'

const Pagination = ({ currentPage, onChangePage }) => {
    return (
        <div>
            <ReactPaginate
                className={module.root}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={(e) => { onChangePage(e.selected + 1) }}
                pageRangeDisplayed={4}
                pageCount={3} //тут мы захардкодили, потому что число страниц должно прийти с бэка
                forcePage={currentPage - 1}
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default Pagination