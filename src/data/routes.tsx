import Landing from '../pages/Landing'
import Modality from '../pages/Modality'
import positions from './positions'

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
        element: <Modality positions={positions.gi}/>
    },
    {
        route_name: 'NoGi',
        route: '/nogi',
        icon: '🤼‍♂️',
        element: <Modality positions={positions.noGi}/>
    }
]

export default routes