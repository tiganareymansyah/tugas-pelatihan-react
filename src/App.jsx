import Header from "./components/header";
import Product from "./components/product";

export default function App() {
  const listProducts = [
    {
      name: "Air Jordan Wmns Aj 1 Mid",
      images:
        "https://www.ncrsport.com/img/storage/large/DN3738-400-1.jpg?2023-03-06%2011:33:39",
      price: "Rp.2.800.000,-",
      desc: `Sepatu Air Jordan Wmns Aj 1 Mid dengan harga Rp.2.800.000,- adalah kualitas terbaik.`,
    },
    {
      name: "Yeezy 350 V2 Black Cooper",
      images:
        "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/12/1/234025d9-85bc-48fb-9bfb-8aa815feacf8.jpg",
      price: "Rp.500.000,-",
      desc: `Sepatu Yeezy 350 V2 Black Cooper dengan harga Rp.500.000,- adalah kualitas terbaik.`,
    },
    {
      name: "Macbeth",
      images:
        "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/2/13/a4d96e55-6c0f-428f-ae3a-4794ddf3ac37.jpg",
      price: "Rp.200.000,-",
      desc: `Sepatu Macbeth dengan harga Rp.200.000,- adalah kualitas terbaik.`,
    },
    {
      name: "Sneakers VFSO-065",
      images:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-36503573/sneakers_sepatu_sneakers_pria_vn_petir_mesh_vfso-065_full01_qd2xgs33.jpg",
      price: "Rp.150.000,-",
      desc: `Sepatu Sneakers VFSO-065 dengan harga Rp.150.000,- adalah kualitas terbaik.`,
    },
    {
      name: "Vans",
      images:
        "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/10/5/e754c44f-e9e0-42cb-8de7-6a5db92aa990.jpg",
      price: "Rp.100.000,-",
      desc: `Sepatu Vans dengan harga Rp.100.000,- adalah kualitas terbaik.`,
    },
  ];

  return (
    <>
      <Header />
      <div className="div-margin">
        <div className="div-product">
          {listProducts.map((p, i) => {
            return (
              <Product
                key={i}
                name={p.name}
                images={p.images}
                price={p.price}
                desc={p.desc}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
