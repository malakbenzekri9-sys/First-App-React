
import './App.css'
import reactimage from "./assets/reactimage.svg"


const App = () => {
  let country = "Tunisia";
  let year = new Date().getFullYear();
  return (
    <div id="container">
      <h1>Welcome to React JS</h1>
      <img src={reactimage} width="100"  alt="react logo" />
      <p>Hello {country}</p>
      <p> {year}</p>
      <button className="btn">Get started</button>
    </div>
  )
}

export default App