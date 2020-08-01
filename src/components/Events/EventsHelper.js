
export function callCreateEvent(eventInfo) {
    console.log(eventInfo);
    return fetch('http://localhost:3001/eventcreate/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: eventInfo.name,
            host: eventInfo.host,
            invited: eventInfo.invited,
            location: eventInfo.location,
            time: eventInfo.time,
            details: eventInfo.details,
            duration: eventInfo.duration,
        })
    })
        .then(response => response.json())
}
