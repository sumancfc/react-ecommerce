import React from "react";
import Products from "../components/common/products";
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
        <Products />
      </Section>
    </Layout>
  );
};

export default Home;
