function resolveUrl(url) {
    return new URL(url, "localhost:25565").href;
    // return new URL(url, "http://189.4.114.105:25565").href;
}

export function get(url) {
    return fetch(resolveUrl(url), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
}

export function post(url, data) {
    return fetch(resolveUrl(url), {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}