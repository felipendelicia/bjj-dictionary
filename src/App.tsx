import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import routes from './data/routes'
import styles from './data/styles'

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
        </Routes>
      </Router>
    </AppContainer>
  )
}
