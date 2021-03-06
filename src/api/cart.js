import makeRequest from './helpers/makeRequest';

function load(token){
    let url = 'cart/load';

    if(token !== null){
        url += `?token=${token}`
    }
    return makeRequest(url);
}

function add(token, id){
    return makeRequest(`cart/add?token=${token}&id=${id}`);
}

function remove(token, id){
    return makeRequest(`cart/remove?token=${token}&id=${id}`);
}

function changeCnt(token, id, cnt){
    return makeRequest(`cart/change?token=${token}&id=${id}&cnt=${cnt}`);
}

function clean(token){
    return makeRequest(`cart/remove?token=${token}`);
}

export { load, add, remove, changeCnt, clean };