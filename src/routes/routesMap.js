import routes from './index';

let routesMap = {};

routes.forEach((route) => {
    routesMap[route.name] = route.url;
});

export default routesMap;