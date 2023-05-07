import React from "react";
import Info from "../Components/Info/Info";
import MarketPlace from "../Components/MarketPlace/MarketPlace";
import Services from "../Components/Services/Services";
import FiverrBusiness from "../Components/FiverrBusiness";
import NewBanner2 from "../Components/Banner/NewBanner2";
import Team from "../Components/Team/Team";
import Newsletter from "../Components/Newsletter/Newsletter";
import ProductCategory from "../Components/ProductCategory/ProductCategory";
const Home = () => {
  return (
    <div>
      <NewBanner2 />
      <Services />
      <Info />
      <MarketPlace />
      <ProductCategory />
      <FiverrBusiness />
      <Team />
      <Newsletter />
    </div>
  );
};

export default Home;
