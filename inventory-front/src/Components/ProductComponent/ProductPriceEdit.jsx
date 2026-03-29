import React, { useEffect, useState } from 'react';
import { getProductById, editProductPrice } from '../../Services/ProductService';
import { useParams, useNavigate } from "react-router-dom";
import '../../DisplayView.css';

const ProductPriceEdit=()=>{
   const param = useParams();
   let navigate = useNavigate();
   const [newPrice, setNewPrice] = useState(0.0);
   const [product,setProduct] = useState({
   productId:"",
   productName: "",
   skuId:"",
   purchasePrice: 0.0,
   salesPrice:0.0,
   reorderLevel:0.0,
   stock:0.0,
   vendorId:"",
   status:true,
   });

   const [flag,setFlag]=useState(false);

   const setProductData=()=>{
   getProductById(param.pid).then((response)=>{
   setProduct(response.data);
   });
   }

useEffect(() => {
   setFlag(false);
   setProductData();
},[]
);

const returnBack=()=>{
   navigate('/product-list')
}

const onChangeHandler = (event) =>{
   setNewPrice(event.target.value);
}

/*const updatePrice = (event) => {
   event.preventDefault();
   product.purchasePrice=newPrice;
   editProductPrice(product).then(response=>{
   setFlag(true);
   })
}*/

const updatePrice = (event) => {
    event.preventDefault();
    
    // We update the local object reference
    const updatedProduct = { ...product, purchasePrice: newPrice };
    
    editProductPrice(updatedProduct).then(response => {
        setFlag(true);
        // Optional: navigate back after 2 seconds so user sees the success msg
        setTimeout(() => navigate('/product-list'), 2000);
    }).catch(err => alert("Price update failed."));
}

return(
<div className="form-background">

  <div className="form-card">

    <h3 className="form-title">Edit Product Price</h3>

    <div className="product-info">

      <p><strong>Product Id:</strong> {product.productId}</p>
      <p><strong>SKU:</strong> {product.skuId}</p>
      <p><strong>Product Name:</strong> {product.productName}</p>
      <p><strong>Purchase Price:</strong> {product.purchasePrice}</p>
      <p><strong>Sales Price:</strong> {product.salesPrice}</p>
      <p><strong>Reorder Level:</strong> {product.reorderLevel}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p><strong>Vendor:</strong> {product.vendorId}</p>

    </div>

    <div className="form-group">

      <label>Enter New Purchase Price</label>

      <input
        placeholder="New Price"
        name="newPrice"
        className="form-control"
        value={newPrice}
        onChange={onChangeHandler}
      />

    </div>

    {flag && <p className="success-msg">Product Price Updated...</p>}

    <div className="form-buttons">

      <button className="btn btn-success" onClick={updatePrice}>
        Save
      </button>

      <button className="btn btn-warning" onClick={returnBack}>
        Return
      </button>

    </div>

  </div>

</div>
);
}

export default ProductPriceEdit;