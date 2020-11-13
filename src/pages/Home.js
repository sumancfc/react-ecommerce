import React from "react";
import ProductGrid from "../components/common/products/ProductGrid";
import Section from "../components/common/section";
import HeroSlider from "../components/common/slider";
import Title from "../components/common/title";
import Layout from "../components/Layouts";

const Home = () => {
  return (
    <Layout>
      <HeroSlider />
      <Section className='product__area pt-80 pb-100'>
        <Title
          title='Best Products'
          desc='lorem ipsum lorem ipsum lorem ipsumv lorem ipsum'
        />
        <ProductGrid />
      </Section>
    </Layout>
  );
};

export default Home;
