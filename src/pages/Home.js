import React from "react";
import ProductGrid from "../components/common/products/ProductGrid";
import HeroSlider from "../components/common/slider";
import Layout from "../components/Layouts";

const Home = () => {
  return (
    <Layout>
      <HeroSlider />

      <ProductGrid category='watch' limit={7} />
    </Layout>
  );
};

export default Home;
