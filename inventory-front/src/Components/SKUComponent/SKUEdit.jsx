import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateSKU, getSKUById } from '../../Services/SKUService';
import '../../DisplayView.css';

const SKUEdit = () => {
    let navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [sku, setSku] = useState({});
    const [description, setDescription] = useState("");
    const param = useParams();

    const setSKUData = () => {
        getSKUById(param.skuno).then((response) => {
            setSku(response.data);
        });
    }

    useEffect(() => {
        setSKUData();
    }, []);

    const editSKU = (event) => {
    event.preventDefault();
    sku.skuDescription = description;
    updateSKU(sku).then((response) => {
        alert("SKU updated");
        navigate('/sku-list');
    });
}

const handleValidation = (event) => {
    event.preventDefault();
    let tempErrors = {};
    let isValid = true;

    if (!description.trim()) {
        tempErrors.skuDescription = "SKU description is required";
        isValid = false;
    }

    setErrors(tempErrors);
    if (isValid) {
        editSKU(event);
    }
};

const returnBack = () => {
    navigate('/sku-list');
}

return(
    <div className="form-background">
      <div className="form-card">
        <h2 className="form-title">SKU Update</h2>
        <form>
          <div className="form-group">
            <label>SKU ID</label>
            <input placeholder="SKU Id" name="skuId" className="form-control" value={sku.skuId} readOnly/>
          </div>
          <div className="form-group">
            <label>SKU Category</label>
            <input placeholder="Category" name="category" className="form-control" value={sku.category} readOnly/>
          </div>
          <div className="form-group">
            <label>SKU Description</label>
            <input placeholder="Enter new description" name="skuDescription" className="form-control" value={description} onChange={(event)=>setDescription(event.target.value)}/>
            {errors.skuDescription && <p className="error">{errors.skuDescription}</p>}
          </div>
          <div className="form-buttons">
            <button className="primary-btn" onClick={handleValidation} type="button">Submit</button>
            <button className="secondary-btn" onClick={()=>returnBack()} type="button">Return</button>
          </div>
        </form>
      </div>
    </div>
  );
 

}

export default SKUEdit;
