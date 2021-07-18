import React, { useEffect } from "react";
import { StoreContext } from "../../utils/store";

const AdminContainer = () => {
  const { controlNavBar } = React.useContext(StoreContext);
  const [isShowNavBar, setShowNavBar] = controlNavBar;
  useEffect(() => {
    setShowNavBar(false);
  }, []);
  
  return <div>
      AdminContainer
  </div>;
};

export default AdminContainer;
