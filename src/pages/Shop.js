import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/common/breadcrumb";
import ShopTopbar from "../components/common/products/ShopTopbar";
import Layout from "../components/Layouts";
import Paginator from "react-hooks-paginator";
import { connect } from "react-redux";
import { productSorted } from "../helpers/products";
import "../components/common/products/Products.css";
import ShopSidebar from "../components/common/products/ShopSidebar";
import ShopProducts from "../components/common/products/sub/ShopProducts";

const Shop = ({ products, location }) => {
  const [layout, setLayout] = useState("grid three-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const pageLimit = 5;

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSort = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const sortFilter = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedProducts = productSorted(products, sortType, sortValue);
    const filterSortedProducts = productSorted(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <Layout>
      <Breadcrumb pageTitle='Shop' />

      <div className='shop__area pt-90 pb-90 section-padding'>
        <div className='container-fluid'>
          <div className='row flex-row-reverse'>
            <div className='col-lg-9'>
              <ShopTopbar
                getLayout={getLayout}
                getFilterSort={sortFilter}
                productNum={products.length}
                productSortedNum={currentData.length}
              />

              <ShopProducts layout={layout} products={currentData} />

              <div className='pagination-prod text-center'>
                <Paginator
                  totalRecords={sortedProducts.length}
                  pageLimit={pageLimit}
                  pageNeighbours={2}
                  setOffset={setOffset}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  pageContainerClass='mb-0 mt-0'
                  pagePrevText='«'
                  pageNextText='»'
                />
              </div>
            </div>
            <div className='col-lg-3'>
              <ShopSidebar products={products} getSort={getSort} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productData.products,
  };
};

export default connect(mapStateToProps)(Shop);
