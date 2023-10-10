import { useState } from "react"

function App() {
  const [color, setColor] = useState("purple")

  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}
     ></div>

     <div className="fixed flex justify-center flex-wrap inset-x-0 px-2 bottom-12">
     <div className="flex justify-center flex-wrap bg-white px-2 py-2 rounded-3xl gap-3 shadow-lg">
      <button 
      onClick={() => setColor("red")}
      className="outline-none px-4 rounded-full py-1 shadow-lg text-white"
      style={{backgroundColor:"red"}}
      >Red</button>
      <button 
      onClick={() => setColor("DarkSlateGrey")}
      className="outline-none px-4 rounded-full py-1 shadow-lg text-white"
      style={{backgroundColor:"DarkSlateGrey"}}
      >DarkSlateGrey</button>
      <button 
      onClick={() => setColor("DodgerBlue")}
      className="outline-none px-4 rounded-full py-1 shadow-lg text-white"
      style={{backgroundColor:"DodgerBlue"}}
      >DodgerBlue</button>
      <button 
      onClick={() => setColor("MediumSeaGreen")}
      className="outline-none px-4 rounded-full py-1 shadow-lg text-white"
      style={{backgroundColor:"MediumSeaGreen"}}
      >MediumSeaGreen</button>
      <button 
      onClick={() => setColor("GoldenRod")}
      className="outline-none px-4 rounded-full py-1 shadow-lg text-white"
      style={{backgroundColor:"GoldenRod"}}
      >GoldenRod</button>
      <button 
      onClick={() => setColor("Teal")}
      className="outline-none px-4 rounded-full py-1 shadow-lg text-white"
      style={{backgroundColor:"Teal"}}
      >Teal</button>
     </div>
     </div>
    </>
  )
}

export default App
