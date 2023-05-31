import Header from "./components/header"
import JudulForm from "./components/judul-form"
import Login from "./components/login"

function App() {
  return (
    <>
      <Header />
      <div className="div-form">
        <fieldset className="fieldset">
          <JudulForm judul = "Login" />
          <form name="formLogin" className="form-login">
            <Login />
          </form>
        </fieldset>
      </div>
    </>
  )
}

export default App
