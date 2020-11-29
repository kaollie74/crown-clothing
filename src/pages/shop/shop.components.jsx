import React from "react";

import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.components";
import CollectionPage from "../collection/collection.component";

// match is a prop the is automatically pass by Route HOC. In App.js, Shop Page is nested in a route. this component will have access to now
// match, history. Runn a conosle.log to verify.
const ShopPage = ({ match }) => {
  console.log("match::::::", match);
  return (
    <div className="shope-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}; // end ShopPage

export default ShopPage;
