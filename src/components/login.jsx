import KotakText from "./kotak-teks";
import Tombol from "./tombol";

export default function Login() {
    return (
        <>
            <KotakText nama = "Email"/>
            <KotakText nama = "Kata Sandi"/>
            <Tombol kata = "Login"/>
        </>
    )
}