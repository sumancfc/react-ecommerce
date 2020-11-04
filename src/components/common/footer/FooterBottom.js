import React from "react";

const FooterBottom = () => {
  return (
    <div className='footer__bottom'>
      <div className='row d-flex align-items-center'>
        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
          <div className='footer__bottom-text'>
            &copy; Copyright {new Date().getFullYear("Y")}. All rights reserved.
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
          <div className='footer__payment'>
            <div className='footer__bottom-text'>We Accept -</div>
            <div className='footer__payment-method'>
              <ul>
                <li>
                  <img src='/assets/img/paypal.png' alt='Paypal' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
