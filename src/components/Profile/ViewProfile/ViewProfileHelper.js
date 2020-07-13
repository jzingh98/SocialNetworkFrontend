
export function viewProfileGet(userName) {

    return fetch('http://localhost:3001/viewprofile/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            userName: userName
        })
    })
        .then(response => response.json())

}
