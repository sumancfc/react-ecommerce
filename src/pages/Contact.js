import React from "react";
import Breadcrumb from "../components/common/breadcrumb";
import ContactForm from "../components/common/contact-form";
import Info from "../components/common/info";
import Layout from "../components/Layouts";

const Contact = () => {
  return (
    <Layout>
      <Breadcrumb pageTitle='Contact Us' />

      <div className='contact__area pt-85'>
        <div className='container'>
          <Info />
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
