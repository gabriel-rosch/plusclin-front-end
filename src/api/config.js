
function resolveUrl (url) {
    return new URL(url, "http://localhost:3331").href;
}

export function get (url) {
    // eslint-disable-next-line no-console
    console.log(resolveUrl(url))
    return fetch(resolveUrl(url), {
        method: 'GET',
        mode:'no-cors',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer' }
    }).then(function(response) {
        response.json();
    })
}

export function post (url, data) {
    return fetch(resolveUrl(url), {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}
