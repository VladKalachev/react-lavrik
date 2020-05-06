import routes from './index';

let routesMap = {};

routes.forEach((route) => {
    if(route.hasOwnProperty('name')){
        routesMap[route.name] = route.url;
    }
});

let routeBuilder = function(name, params) {
    if(!routesMap.hasOwnProperty(name)){
        return null;
    }

    let url = routesMap[name];
    for(let key in params){
        url = url.replace(':' + key, params[key]);
    }

    return url;
}

export default routesMap;
export { routeBuilder };