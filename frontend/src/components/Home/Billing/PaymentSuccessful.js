import React from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccessful = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <section className="inner_page_head bg-green">
        <div className="container_fuild ">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Payment Successful</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentSuccessful;
