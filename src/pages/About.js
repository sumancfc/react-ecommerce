import React from "react";
import AboutSection from "../components/common/about";
import Breadcrumb from "../components/common/breadcrumb";
import Featured from "../components/common/featured";
import Layout from "../components/Layouts";

const About = () => {
  return (
    <Layout>
      <Breadcrumb pageTitle='About' />
      <AboutSection />
      <Featured />
    </Layout>
  );
};

export default About;
