import React, { useState } from "react";
import "./CreateNFT.css";

function SellNFT({ setNfts }) {

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [bid, setBid] = useState("");

  function handleImage(e) {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  function handleCreate(e) {
    e.preventDefault();

    const newNFT = {
      id: Date.now().toString(),
      name: name,
      bid: price,
      image: image
    };

    setNfts(prev => [...prev, newNFT]);

    setName("");
    setPrice("");
    setBid("");
    setImage(null);

    console.log("NFT created:", newNFT);
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

          {image && (
            <img
              src={image}
              alt="preview"
              className="preview-img"
            />
          )}

        </div>

          <button className="create-btn">
            Create
          </button>

        </form>

        {/*<div className="preview">

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

          {image && (
            <img
              src={image}
              alt="preview"
              className="preview-img"
            />
          )}

        </div>*/}

      </div>

    </div>
  );
}

export default SellNFT;


/*import React, { useState } from "react";
import "./CreateNFT.css";

function SellNFT() {
  const [image, setImage] = useState(null);

  function handleImage(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  const [nfts, setNfts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [bid, setBid] = useState("");
  // const [imag, setImag]= useState('');

  function handleCreate(e) {
    e.preventDefault();

    const newNFT = {
      name: name,
      price: price,
      royalty: bid,
      image: image,
    };

    setNfts(prev => [...prev, newNFT]);
     setBid('');
     setImage(null);
     setName('');
     setPrice('');
  }

  return (
    <div className="create-container">
      <h1>Create Your NFT</h1>

      <div className="create-wrapper">
        <form className="nft-form">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />

          <label>Description</label>
          <textarea placeholder="Enter description"></textarea>

          <div className="row">
            <div>
              <label>Royalty</label>
              <input
                type="number"
                placeholder="10%"
                onChange={(e) => setBid(e.target.value)}
              />
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
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <label>In Stock</label>
              <input type="number" placeholder="1" />
            </div>
          </div>

          <button className="create-btn">Create</button>
        </form>

        <div className="preview">
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            // onChange={(e)=>setImag(e.target.value)}
          />

          {image && <img src={image} alt="preview" className="preview-img" />}

          <button className="upload-btn" onClick={handleCreate}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default SellNFT; покажи ошибки   */