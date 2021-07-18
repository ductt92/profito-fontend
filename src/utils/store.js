import React, { useState } from "react";

export const StoreContext = React.createContext(null);
const ContextContainer = ({ children }) => {
  const [navBarControl, setNaBarControl] = useState(true);

  const store = {
    controlNavBar: [navBarControl, setNaBarControl],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default ContextContainer;
