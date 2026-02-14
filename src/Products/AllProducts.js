import React, { useContext, useState } from "react";
import Allcompo from "../components/Allcompo";
import Footer from "../components/Footer";
import { apiValue } from "../Data/AllData";
import { CartProvider, useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Page() {
  const { addItem } = useCart();
  const ctx = useContext(apiValue) || {};
  const data = ctx.text || [];
  const [search, setSearch] = useState("");
  const getValue = (e) => {
    setSearch(e.target.value);
  };
  return (
    <CartProvider>
      <Allcompo />
      <div className="section properties">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <form>
                <input
                  type="text"
                  className="form-control mb-5"
                  placeholder="Search by title, ID, or tags..."
                  onChange={getValue}
                />
              </form>
            </div>
            {data
              .filter((item) => {
                if (search === "") return true;
                const s = String(search).toLowerCase();
                if (String(item.id) === search) return true;
                if (item.title && String(item.title).toLowerCase().includes(s))
                  return true;
                if (item.tags && String(item.tags).toLowerCase().includes(s))
                  return true;
                return false;
              })
              .map((item) => (
                <div
                  key={item.id}
                  className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv"
                >
                  <div className="item">
                    <img src={item.images && item.images[0]} alt={item.title} />

                    <span className="category">{item.tags}</span>
                    <h6>${item.price}</h6>
                    <h4>{item.title}</h4>
                    <ul>
                      <li>
                        ID: <span>{item.id}</span>
                      </li>
                      <li>
                        Area: <span>{item.Area}</span>
                      </li>
                    </ul>
                    <div className="main-button">
                      <Link to={`/details-product/${item.id}`}>Details</Link>
                      <button
                        onClick={() => {
                          addItem(item);
                          Swal.fire({
                            title: "Added to Cart!",
                            text: `${item.tags} has been added to your cart.`,
                            icon: "success",
                            confirmButtonColor: "#f35525",
                          });
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </CartProvider>
  );
}

function AllProducts() {
  return (
    <CartProvider>
      <Page />
    </CartProvider>
  );
}

export default AllProducts;
