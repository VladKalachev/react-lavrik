let baseUrl = '';

export default function makeRequest(url, options = {}, baseUrl = baseUrl){
    return fetch(baseUrl + url, options).then((response) => {
        if(response.status !== 200){
            return response.text().then(function(text){
                throw new Error(text)
            })
        }
        return response.json()
    });
}