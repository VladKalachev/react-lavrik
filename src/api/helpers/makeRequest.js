 let baseUrl = '/api/';

export default function makeRequest(url, options = {}, base = baseUrl){
    return fetch(base + url, options).then((response) => {
        if(response.status !== 200){
            return response.text().then(function(text){
                throw new Error(text)
            })
        }
        return response.json()
    });
}