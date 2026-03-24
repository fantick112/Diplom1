import React, { useState } from "react";
import "./CreateNFT.css";

function SellNFT({ setNfts }) {

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [bid, setBid] = useState("");


  const [errors, setErrors] = useState({});  
  function handleImage(e) {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  function handleCreate(e) {
    e.preventDefault();

     const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return; 
  }


    const newNFT = {
      id: Date.now().toString(),
      name: name,
      bid: bid,
      price: price,
      image: image
    };

    setNfts(prev => [...prev, newNFT]);

    setName("");
    setPrice("");
    setBid("");
    setImage(null);

    console.log("NFT created:", newNFT);
  };

  function validate() {
  const newErrors = {};

  if (!name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!price) {
    newErrors.price = "Price is required";
  } else if (Number(price) <= 0) {
    newErrors.price = "Price must be greater than 0";
  }

  if (!bid) {
    newErrors.bid = "Royalty is required";
  } else if (Number(bid) < 0 || Number(bid) > 100){
    newErrors.bid = "Royalty must be between 0 and 100";
  }

  if (!image) {
    newErrors.image = "Image is required";
  }

  return newErrors;
}

  return (
    <div className="create-container">

      <h1>Create Your NFT</h1>

      <div className="create-wrapper">

        <form className="nft-form" onSubmit={handleCreate}>

          <label>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label>Description</label>
          <textarea placeholder="Enter description"></textarea>

          <div className="row">

            <div>
              <label>Royalty</label>
              <input
                type="number"
                placeholder="10%"
                value={bid}
                onChange={(e) => setBid(e.target.value)}
              />
              {errors.bid && <p className="error">{errors.bid}</p>}
            </div>

            <div>
              <label>Size</label>
              <input type="text" placeholder="1000x1000" />
            </div>

          </div>

          <label>Tags</label>
          <input type="text" placeholder="NFT, Art" />

          <div className="row">

            <div>
              <label>Price</label>
              <input
                type="number"
                placeholder="$0.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              {errors.price && <p className="error">{errors.price}</p>}
            </div>

            <div>
              <label>In Stock</label>
              <input type="number" placeholder="1" />
            </div>
           

          </div>
           <div className="preview">

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />
 {errors.image && <p className="error">{errors.image}</p>}
        {image && (
  <div>
    <img
      src={image}
      alt="preview"
      className="preview-img"
    />
    
  </div>
)}
        </div>

          <button className="create-btn">
            Create
          </button>

        </form>

      </div>

    </div>
  );
}

export default SellNFT;

