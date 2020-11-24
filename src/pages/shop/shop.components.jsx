import React from "react";
import SHOP_DATA from "./shope.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  } // end constructor

  render() {
    const { collections } = this.state;
    return (
      <div className="shope-page">
        {collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key ={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
} // end ShopPage

export default ShopPage;
