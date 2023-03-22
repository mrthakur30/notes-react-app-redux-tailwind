import React from "react"
import Header from "./components/partials/Header"
import Footer from "./components/partials/Footer"
import Note from "./components/Note";
import Form from "./components/Form";

function App() {

  return (
    <div className="bg-stone-200 h-screen">
         <Header />
         <Form />
         <Note />
         <Footer /> 
    </div>
  )
}

export default App
