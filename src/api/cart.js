import makeRequest from './helpers/makeRequest';

function load(token){
    let url = 'cart/load';

    if(token !== null){
        url += `?token=${token}`
    }
    return makeRequest(url);
}

export { load };