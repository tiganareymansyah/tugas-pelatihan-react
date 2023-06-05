export default function Product() {
  const listProducts = [
    {
      id: 1,
      productName: "Sneakers Converse CTAS",
      productPrice: "Rp. 599.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/2/02-CONVERSE-FFSSBCONA-CONA03576C-Yellow.jpg",
    },
    {
      id: 2,
      productName: "Converse Run Star Motion Canvas",
      productPrice: "Rp. 1.799.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/C/O/CON171546C-1.jpg",
    },
    {
      id: 3,
      productName: "Converse CTAS Construct Colorblock",
      productPrice: "Rp. 1.599.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA03472C-Grey.jpg",
    },
    {
      id: 4,
      productName: "Converse Chuck Taylor All Star",
      productPrice: "Rp. 899.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCON0-CON135251C-Black.jpg",
    },
    {
      id: 5,
      productName: "Converse Unisex Chuck 70 Plus",
      productPrice: "Rp. 1.599.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA02871C-Brown.jpg",
    },
  ];

  const detailPro = listProducts.map((product) => {
    const handleOnClick = () => {
      alert(
        `Product ${product.productName} dengan harga ${product.productPrice} merupakan kualitas terbaik`
      );
    };
    return (
      <div key={product.id} className="div-product" onClick={handleOnClick}>
        <img src={product.urlImage} />
        <p>{product.productName}</p>
        <p>{product.productPrice}</p>
      </div>
    );
  });

  return detailPro;
}
