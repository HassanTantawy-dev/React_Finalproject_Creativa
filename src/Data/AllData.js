import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const apiValue = createContext();

function AllData({ children }) {
  const [text, setText] = useState([]);
  useEffect(() => {
    axios.get("/assets/js/api.json").then((item) => {
      setText(item.data.products);
    });
  }, []);
  return (
    <apiValue.Provider value={{ text, setText }}>
      {children}
    </apiValue.Provider>
  );
}

export default AllData;
