import Sidebar from "./Components/Sidebar.jsx"
import Header from "./Components/Header.jsx"

import { DashboardPage } from "./Pages/Dashboard.jsx"
import { KanbanboardPage } from "./Pages/Kanbanboard.jsx"

function App() {
  const currentPath = window.location.pathname
  let page = null
  if(currentPath === '/'){
    page = <DashboardPage />
  } else if(currentPath === '/kanbanboard'){
    page = <KanbanboardPage />
  }
  return (
    <>
    <div className="container">
      <Sidebar currentPage={currentPath}/>
      <div className="main-content">
        <Header />
        {page}
      </div>
    </div>
    </>
  )
}

export default App
