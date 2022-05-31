import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
import axios from "axios";


// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];



function Items({ currentItems }) {
  return (
    <div style={{display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>

      {currentItems &&
        currentItems.map((item, i) => (
          <Product data={item} key={i}/>
        ))}
    </div>
  );
}

const Products = ({ itemsPerPage }) => {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [APIdata, setAPIdata] = useState([])

  useEffect(()=>{
    axios.get(`https://sheet.best/api/sheets/d4bb2019-d5da-4d63-8722-2c28d98990ef`)
    .then( response => setAPIdata(response.data))
    .catch(err => console.log(err.message))

  }, [])

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(APIdata.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(APIdata.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, APIdata]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  return (
    <div style={{backgroundColor: 'white', color: 'black', padding: '1rem'}}>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default Products;
