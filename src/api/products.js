import makeRequest from './helpers/makeRequest';

function all(){
    return makeRequest('products/all');
}

export { all };