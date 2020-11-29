import React from "react";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection)
  const { title, items } = collection;
  return (
    <div className="collection-page ">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// ownProps is a second argument that Redux will take in. These are the Props that are coming from the component itself.
// in this example: we are passing in the props comming from CollectionPage which is used in the ShopPage component.
// Go there to see what props are being passed in.
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
