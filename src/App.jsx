import React from "react"
import Header from "./components/partials/Header"
import Footer from "./components/partials/Footer"
import Note from "./components/Note";
import Form from "./components/Form";
import SignIn from "./components/SignIn";

function App() {

  return (
    <div className="">
         <Header />
         <Form />
         <Note />
         <Footer /> 
    </div>
  )
}

export default App
