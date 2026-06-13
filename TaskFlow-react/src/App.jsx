import Sidebar from "./Sidebar.jsx"
import Header from "./Header.jsx"
import Body from "./Body.jsx"

function App() {
  return (
    <>
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Body />
      </div>
    </div>
    </>
  )
}

export default App
