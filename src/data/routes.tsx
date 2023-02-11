import Gi from '../pages/Gi'
import Landing from '../pages/Landing'
import NoGi from '../pages/NoGi'

const routes = [
    {
        route_name: 'Inicio',
        route: '/',
        icon: '🏠',
        element: <Landing/>
    },
    {
        route_name: 'Gi',
        route: '/gi',
        icon: '👘',
        element: <Gi/>
    },
    {
        route_name: 'NoGi',
        route: '/nogi',
        icon: '🤼‍♂️',
        element: <NoGi/>
    }
]

export default routes