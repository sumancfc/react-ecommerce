import React from "react";
import ProductGrid from "../components/common/products/ProductGrid";
import ProductTab from "../components/common/products/ProductTab";
import HeroSlider from "../components/common/slider";
import Layout from "../components/Layouts";

const Home = () => {
  return (
    <Layout>
      <HeroSlider />

      <ProductGrid category='watch' limit={8} />
      <ProductTab category='watch' limit={6} />
    </Layout>
  );
};

export default Home;
