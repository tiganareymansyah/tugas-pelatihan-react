import { GiCrossedSwords } from "react-icons/gi";

export default function Header() {
    return (
        <>
            <GiCrossedSwords fontSize={30}/>
            <h1 className="judul">{"Fu*kin' Human"}</h1>
            <button className="button-logout">Logout</button>
        </>
    )
}