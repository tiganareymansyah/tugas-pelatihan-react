import { useState } from "react";
import Human from "./components/Human";
import Header from "./components/header";
import { AiOutlinePlus, AiTwotoneEdit } from "react-icons/ai";
import { MdDelete, MdZoomOutMap } from "react-icons/md";
import "./App.css";

export default function App() {
  const [human, setHuman] = useState([
    {
      id: 1,
      name: "Mas Rinal",
      age: 41,
    },
    {
      id: 2,
      name: "Mas Travada",
      age: 42,
    },
    {
      id: 3,
      name: "Mas Sudrajat",
      age: 43,
    },
  ]);
  const [newHumanId, setNewHumanId] = useState(0);
  const [newHumanName, setNewHumanName] = useState("");
  const [newHumanAge, setNewHumanAge] = useState();
  const [editById, setEditByID] = useState(0);
  const [editNama, setEditNama] = useState("");

  return (
    <div>
      <header className="header-nav">
        <Header />
      </header>
      <div className="div-human-data">
        <div className="div-human-data1">
          <h2 className="h2-judul">Human Data</h2>
          {human.map((h, i) => {
            return <Human key={i} id={h.id} name={h.name} age={h.age} />;
          })}
        </div>
      </div>
      <main className="main-human">
        <div className="div-form-tambah">
          <h2>Tambah Data Human</h2>
          <form>
            <input
              type="number"
              placeholder="Id"
              onChange={(e) => setNewHumanId(parseInt(e.target.value))}
            />
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setNewHumanName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Age"
              onChange={(e) => setNewHumanAge(parseInt(e.target.value))}
            />
            <div className="div-button-tambah">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log(
                    setHuman([
                      {
                        id: newHumanId,
                        name: newHumanName,
                        age: newHumanAge,
                      },
                      ...human,
                    ])
                  );
                }}
              >
                <AiOutlinePlus /> Depan
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log(
                    setHuman([
                      ...human,
                      {
                        id: newHumanId,
                        name: newHumanName,
                        age: newHumanAge,
                      },
                    ])
                  );
                }}
              >
                <AiOutlinePlus /> Belakang
              </button>
            </div>
          </form>
        </div>
        <div className="div-form-edit">
          <h2>Edit Data Human</h2>
          <div className="div-button-edit">
            <form>
              <input
                type="number"
                value={editById}
                onChange={(e) => {
                  e.preventDefault();
                  setEditByID(parseInt(e.target.value));
                }}
              />
            </form>
            <form>
              <input
                type="text"
                value={editNama}
                onChange={(e) => {
                  e.preventDefault();
                  setEditNama(e.target.value);
                }}
              />
            </form>
            <button
              onClick={(e) => {
                e.preventDefault();
                setHuman(human.filter((a) => a.id !== editById));
              }}
            >
              <MdDelete /> Data by id
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setHuman(
                  human.map((a) =>
                    a.id === editById ? { ...a, name: editNama } : a
                  )
                );
              }}
            >
              <AiTwotoneEdit /> Data by id
            </button>
            <label>Umur :</label>
            <button
              onClick={(e) => {
                e.preventDefault();
                setHuman(
                  human.map((a) =>
                    a.id === editById ? { ...a, age: a.age + 1 } : a
                  )
                );
              }}
            >
              <MdZoomOutMap fontSize={20} /> Perbesar
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setHuman(
                  human.map((a) =>
                    a.id === editById ? { ...a, age: a.age - 1 } : a
                  )
                );
              }}
            >
              Perkecil
            </button>
          </div>
        </div>
        <div className="div-form-hapus">
          <h2>Hapus Data Human</h2>
          <div className="div-button-hapus">
            <button onClick={() => setHuman(human.slice(1))}>
              <MdDelete /> Depan
            </button>
            <button onClick={() => setHuman(human.slice(0, -1))}>
              <MdDelete /> Belakang
            </button>
            <button onClick={() => setHuman(human.slice(0, 0))}>
              <MdDelete /> Semua
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
