import Calculator from "./Calculator"
import Grid from "./Grid"
import Header from "./Header"

function App() {
  return (
    <div className="App">
      <Header />
      <main><h1>Basic calculator</h1></main>
      <Calculator name="Addition Form" />
      <Grid />
    </div>
  )
}

export default App
