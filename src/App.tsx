import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import routes from './data/routes'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {
            // Main Routes
            routes.map((route, i)=>{
              return(
                <Route path={route.route} element={route.element} key={i}/>
              )
            })
          }
        </Routes>
      </Router>
    </div>
  )
}

export default App
