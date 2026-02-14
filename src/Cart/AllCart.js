import React from "react";
import Allcompo from "../components/Allcompo";
import Footer from "../components/Footer";
import { CartProvider, useCart } from "react-use-cart";
import { Link } from "react-router";

function Cart() {
  const {
    items,
    removeItem,
    updateItemQuantity,
    isEmpty,
    cartTotal,
    totalItems,
    totalUniqueItems,
  } = useCart();
  if (isEmpty)
    return (
      <div className="text-center mt-5">
        <img
          src="/assets/images/empty-cart.png"
          style={{ width: "350px" }}
          alt="Empty Cart"
          className="img-fluid mx-auto d-block mt-5"
        />
        <h2 style={{ color: "#f35525" }}>Your Cart is Empty</h2>
        <p className="text-muted">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link to="/products" className="btn main-1 mt-3">
          Start Shopping
        </Link>
      </div>
    );
  return (
    <div>
      <main className="page">
        <section className="shopping-cart dark">
          <div className="container">
            <div className="block-heading">
              <h2>
                Shopping Cart
                <span
                  className="badge badge-primary"
                  style={{
                    padding: "5px",
                    backgroundColor: "#f35525",
                    marginLeft: "5px",
                  }}
                >
                  {totalUniqueItems}
                </span>
              </h2>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="items">
                    {items &&
                      items.map((item) => {
                        return (
                          <div className="product">
                            <div className="row">
                              <div className="col-md-3">
                                <img
                                  className="img-fluid mx-auto d-block image"
                                  src={item.images && item.images[0]}
                                  alt={item.title || "product image"}
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="info">
                                  <div className="row">
                                    <div className="col-md-5 product-name">
                                      <div className="product-name">
                                        <h6 style={{ color: "#f35525" }}>
                                          {item.title}
                                        </h6>
                                        <div className="product-info">
                                          <div>
                                            Area:{" "}
                                            <span className="value">
                                              {item.Area}
                                            </span>
                                          </div>
                                          <div>
                                            Floor:{" "}
                                            <span className="value">
                                              {item.Floor}
                                            </span>
                                          </div>
                                          <div>
                                            Bedrooms:{" "}
                                            <span className="value">
                                              {item.Bedrooms}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4 quantity">
                                      <h6>Quantity: {item.quantity}</h6>
                                      <button
                                        className="btn btn-warning mt-3"
                                        onClick={() =>
                                          updateItemQuantity(
                                            item.id,
                                            item.quantity - 1,
                                          )
                                        }
                                      >
                                        -
                                      </button>
                                      <button
                                        className="btn btn-success mx-2 mt-3"
                                        onClick={() =>
                                          updateItemQuantity(
                                            item.id,
                                            item.quantity + 1,
                                          )
                                        }
                                      >
                                        +
                                      </button>
                                      <button
                                        className="btn btn-danger mt-3"
                                        onClick={() => removeItem(item.id)}
                                      >
                                        &times;
                                      </button>
                                    </div>
                                    <div className="col-md-3 price">
                                      <span>
                                        $
                                        {(item.price * item.quantity).toFixed(
                                          2,
                                        )}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="summary">
                    <h3>Summary</h3>
                    <div className="summary-item">
                      <span className="text">Subtotal</span>
                      <span className="price">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Quantity</span>
                      <span className="price">{totalItems}</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Discount</span>
                      <span className="price">10%</span>
                    </div>
                    <del className="price">${cartTotal.toFixed(2)}</del>
                    <br></br>
                    <div className="summary-item">
                      <span className="text">Total</span>
                      <span className="price">
                        ${(cartTotal - cartTotal * 0.1).toFixed(2)}
                      </span>
                    </div>
                    <button
                      type="button"
                      className=" main-1 btn-lg btn-block mt-4"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function AllCart() {
  return (
    <CartProvider>
      <Allcompo />
      <Cart />
      <Footer />
    </CartProvider>
  );
}

export default AllCart;
