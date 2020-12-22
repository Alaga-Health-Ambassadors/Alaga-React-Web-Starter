import Main from "../containers/Main";
import Splash from "../containers/Splash";

let routes = [{
    path: '/welcome',
    component: Splash,
    parent: 'Splash'
},{
    path: '/main',
    component: Main,
    parent: 'Main'
}]

export default routes;
