function resolveUrl(url) {
    return new URL(url, "http://189.4.114.105:25565").href;
}

export function get(url) {
    return fetch(resolveUrl(url), {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
        }
    })
}

export function post(url, data) {
    return fetch(resolveUrl(url), {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
        },
        body: JSON.stringify(data)
    })
}

export function put(url, data) {
    return fetch(resolveUrl(url), {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
        },
        body: JSON.stringify(data)
    });
}

export function delet(url) {
    return fetch(resolveUrl(url), {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
        }
    })
}
