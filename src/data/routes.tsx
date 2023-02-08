import Gi from '../pages/Gi'
import Landing from '../pages/Landing'
import NoGi from '../pages/NoGi'

const routes = [
    {
        route_name: 'Inicio',
        route: '/',
        element: <Landing/>
    },
    {
        route_name: 'Gi',
        route: '/gi',
        element: <Gi/>
    },
    {
        route_name: 'NoGi',
        route: '/nogi',
        element: <NoGi/>
    }
]

export default routes