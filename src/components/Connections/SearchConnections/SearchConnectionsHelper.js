
export function searchMatchesGet(searchTerm) {

    return fetch('http://localhost:3001/searchusers/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            searchTerm: searchTerm
        })
    })
        .then(response => response.json())

}

export function searchMyMatchesGet(searchTerm) {

    return fetch('http://localhost:3001/matchconnections/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            searchTerm: searchTerm
        })
    })
        .then(response => response.json())

}
