import React, { useContext } from "react";
import Allcompo from "../components/Allcompo";
import Footer from "../components/Footer";
import { apiValue } from "../Data/AllData";
import { Link, useParams } from "react-router-dom";
import { CartProvider } from "react-use-cart";

function AllDetailsProduct() {
  const { id } = useParams();
  const { text: data } = useContext(apiValue);

  return (
    <CartProvider>
      <Allcompo />
      <div className="container">
        {data &&
          data.map((item) => {
            // تأكيد أن المقارنة تتم كسلاسل نصية لتفادي اختلاف النوع (number vs string)
            if (String(item.id) !== String(id)) return null;

            return (
              <div className="card product-card mx-auto" key={item.id}>
                <div className="row g-0 0">
                  <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img
                      src={item?.images?.[0] || ""}
                      alt={item.title || "product image"}
                      className="product-image w-50"
                    />
                  </div>
                  <div className="col-md-6 ">
                    <div className="card-body">
                      <h3 className="card-title">{item.title}</h3>
                      <p className="text-muted small">
                        • Bedrooms: {item.Bedrooms}{" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Bathrooms:{" "}
                        {item.Bathrooms} <br></br>• Area: {item.Area}{" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Floor:{" "}
                        {item.Floor} <br></br>• Parking: {item.Parking}
                      </p>
                      <h4 style={{ color: "#f35525" }}> ${item.price}</h4>
                      <div className="d-flex gap-2 mt-3">
                        <Link
                          to="/products"
                          className="btn btn-dark main-1"
                          style={{}}
                        >
                          Back to Products
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <Footer />
    </CartProvider>
  );
}

export default AllDetailsProduct;
