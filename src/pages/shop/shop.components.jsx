import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.components";
const ShopPage = ({ collections }) => {
  return (
    <div className="shope-page">
      <CollectionsOverview />
    </div>
  );
}; // end ShopPage

export default ShopPage;
