import React from "react";
import { addToCart } from "../../features/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

import { useGetAllProductsQuery } from "../../features/productsApi";
import { goToProductDetails } from "../../features/productSlice";

const Products = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  const history = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history.push("/cart");
  };
  const handleProductDetails = (product) => {
    dispatch(goToProductDetails(product));
    // history.push("/productdetails");
  };

  return (
    <div>
      {isLoading ? (
        <p>isLoading</p>
      ) : error ? (
        <p> An error Occyred... </p>
      ) : (
        <>
          <section className="inner_page_head">
            <div className="container_fuild">
              <div className="row">
                <div className="col-md-12">
                  <div className="full">
                    <h3>Product Grid</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="product_section layout_padding">
            <div className="container">
              <div className="heading_container heading_center">
                <h2>
                  Our <span>products</span>
                </h2>
              </div>
              <div className="row">
                {data?.map((product) => (
                  <div key={product.id} className="col-sm-6 col-md-4 col-lg-4">
                    <div className="box">
                      <div className="option_container">
                        <div className="options">
                          <a
                            onClick={() => handleAddToCart(product)}
                            className="option1"
                          >
                            Add To Cart
                          </a>
                          <a
                            onClick={() => handleProductDetails(product)}
                            // href=""
                            className="option2"
                          >
                            View Details
                          </a>
                        </div>
                      </div>
                      <div className="img-box">
                        <img src={product.image} alt={product.id} />
                      </div>
                      <div className="detail-box">
                        <h5>{product.name}</h5>
                        <h6>${product.price}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="btn-box">
                <a href="/products">View More</a>
              </div>
            </div>
          </section>
        </>
      )}

      <footer className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-col">
              <div className="footer_contact">
                <h4>Reach at..</h4>
                <div className="contact_link_box">
                  <a href="/" style={{ textDecoration: "none" }}>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Location</span>
                  </a>
                  <a href="/" style={{ textDecoration: "none" }}>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Call +01 1234567890</span>
                  </a>
                  <a href="/" style={{ textDecoration: "none" }}>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>demo@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <div className="footer_detail">
                <a
                  href="index.html"
                  className="footer-logo"
                  style={{ textDecoration: "none" }}
                >
                  Famms
                </a>
                <p>
                  Necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with
                </p>
                <div className="footer_social">
                  <a href="/">
                    <FaFacebookF />
                  </a>
                  <a href="/">
                    <FaTwitter />
                  </a>
                  <a href="/">
                    <FaLinkedinIn />
                  </a>
                  <a href="/">
                    <FaInstagram />
                  </a>
                  <a href="/">
                    <FaPinterest />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <div className="map_container">
                <div className="map">
                  <div id="googleMap"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-info">
            <div className="col-lg-7 mx-auto px-0">
              <p>
                © 2022 All Rights Reserved By{"   "}
                <a
                  href="https://github.com/c2-anirban"
                  style={{ textDecoration: "none" }}
                >
                  c2_anirban
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;
