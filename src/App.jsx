import { useState } from "react"
import Header from "./components/Header.jsx"
import InputBox from "./components/InputBox.jsx"
import Results from "./components/Results.jsx"

function App() {
  const [inputData, setInputData] = useState();

  function handleInput(data) {
    setInputData(data);
  }
  
  return (
    <>
      <Header/>
      <InputBox sendDataToParent={handleInput}/>
      <Results inputData={inputData}/>
    </>
  )
}

export default App
