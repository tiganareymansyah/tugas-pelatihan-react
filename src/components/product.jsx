import { useState } from "react";
import "./product.css";

export default function Product(props) {
  const { name, images, price, desc } = props;
  const [like, setLike] = useState(false);
  const [showDesc, setShowDesc] = useState(false);

  const handleClickLike = () => {
    setLike(!like);
  };

  function handleClickDesc() {
    setShowDesc(!showDesc);
  }

  return (
    <div className="div-product1">
      <img src={images} />
      <p>{name}</p>
      <p>Harga : {price}</p>
      <button onClick={handleClickLike} className="button-like">{like ? "Batal Suka" : "Suka"}</button>
      {showDesc && <p>{desc}</p>}
      <button onClick={handleClickDesc} className="button-desc">
        {showDesc ? "Sembunyikan" : "Tampilkan"} detail
      </button>
    </div>
  );
}
