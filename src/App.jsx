import Header from "./components/header";

const listProducts = [
  {
    id: 1,
    productName: "Sneakers Converse CTAS",
    productPrice: "Rp. 599.000",
    deskripsi:
      "Produk Sneakers Converse CTAS dengan harga Rp. 599.000 merupakan product dengan kualitas terbaik",
    urlImage:
      "https://www.converse.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/2/02-CONVERSE-FFSSBCONA-CONA03576C-Yellow.jpg",
  },
  {
    id: 2,
    productName: "Converse Run Star Motion Canvas",
    productPrice: "Rp. 1.799.000",
    deskripsi:
      "Converse Run Star Motion Canvas dengan harga Rp. 1.799.000 merupakan product dengan kualitas terbaik",
    urlImage:
      "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/C/O/CON171546C-1.jpg",
  },
  {
    id: 3,
    productName: "Converse CTAS Construct Colorblock",
    productPrice: "Rp. 1.599.000",
    deskripsi:
      "Converse CTAS Construct Colorblock dengan harga Rp. 1.599.000 merupakan product dengan kualitas terbaik",
    urlImage:
      "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA03472C-Grey.jpg",
  },
  {
    id: 4,
    productName: "Converse Chuck Taylor All Star",
    productPrice: "Rp. 899.000",
    deskripsi:
      "Produk Converse Chuck Taylor All Star dengan harga Rp. 899.000 merupakan product dengan kualitas terbaik",
    urlImage:
      "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCON0-CON135251C-Black.jpg",
  },
  {
    id: 5,
    productName: "Converse Unisex Chuck 70 Plus",
    productPrice: "Rp. 1.599.000",
    deskripsi:
      "Produk Converse Unisex Chuck 70 Plus dengan harga Rp. 1.599.000 merupakan product dengan kualitas terbaik",
    urlImage:
      "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA02871C-Brown.jpg",
  },
];

function App() {
  const handleOnClick = (nama) => {
    alert(`Detail produk: ${nama}`);
  };

  return (
    <div>
      <Header />
      <main className="main">
        {listProducts.map((product) => (
          <div
            key={product.id}
            className="pro"
            onClick={() => handleOnClick(product.deskripsi)}
          >
            <img src={product.urlImage} alt={product.name} />
            <h2>{product.productName}</h2>
            <p>Harga: Rp.{product.productPrice}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
