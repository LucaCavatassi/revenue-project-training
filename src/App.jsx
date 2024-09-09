import { useState } from "react"
import Header from "./components/Header.jsx"
import InputBox from "./components/InputBox.jsx"
import Results from "./components/Results.jsx"

function App() {
  const [inputData, setInputData] = useState();

  function handleInput(data) {
    setInputData(data);
  }
  
  
  const inputValid = inputData?.duration > 0

  return (
    <>
      <Header/>
      <InputBox sendDataToParent={handleInput}/>
      { inputValid ? <Results inputData={inputData}/> : 
        <p className="center"> Please enter postive numbers. </p>}
    </>
  )
}

export default App
