export function GetData(type, userData, token) {
    let BaseURL = '/';
    return new Promise((resolve, reject) => {
        fetch(BaseURL + type, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Host': 'api.producthunt.com'
            },
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}