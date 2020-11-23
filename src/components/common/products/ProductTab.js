import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import SectionTitle from "../section-title";
import ProductItems from "./sub/ProductItems";

const ProductTab = ({ category, limit }) => {
  return (
    <div className='product__area pb-100'>
      <div className='container'>
        <SectionTitle
          title='Daily Deals'
          desc='lorem ipsum lorem ipsum lorem ipsumv lorem ipsum'
        />

        <Tab.Container defaultActiveKey='bestSeller'>
          <Nav variant='pills' className='product-tab-list pb-50 text-center'>
            <Nav.Item>
              <Nav.Link eventKey='new'>
                <h4>New Arrival</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='bestSeller'>
                <h4>Best Seller</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='saleItems'>
                <h4>Sale Items</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey='new'>
              <div className='row'>
                <ProductItems category={category} limit={limit} type='new' />
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey='bestSeller'>
              <div className='row'>
                <ProductItems
                  category={category}
                  limit={limit}
                  type='bestSeller'
                />
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey='saleItems'>
              <div className='row'>
                <ProductItems
                  category={category}
                  limit={limit}
                  type='saleItems'
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default ProductTab;
