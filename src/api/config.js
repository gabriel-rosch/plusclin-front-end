function resolveUrl(url) {
    return new URL(url, "http://localhost:3332").href;
}

export function get(url) {
    return fetch(resolveUrl(url), {
        method: 'GET'
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