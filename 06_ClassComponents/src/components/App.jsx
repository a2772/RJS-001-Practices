import Calculator from "./Calculator"
import Header from "./Header"

function App() {
  return (
    <div className="App">
      <Header />
      <main><h1>Basic calculator</h1></main>
      <Calculator name="Addition Form" />
    </div>
  )
}

export default App
