import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import positions from './data/positions'
import routes from './data/routes'
import styles from './data/styles'
import Position from './pages/Position'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${styles.white};
`

export default function App() {
  return (
    <AppContainer>
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
          {
            // Gi position Routes
            positions.gi.map((position, i)=>{
              return(
                <Route path={position.route} element={<Position/>} key={i}/>
              )
            })
          }
          {
            // noGi position Routes
            positions.noGi.map((position, i)=>{
              return(
                <Route path={position.route} element={<Position/>} key={i}/>
              )
            })
          }
        </Routes>
      </Router>
    </AppContainer>
  )
}
