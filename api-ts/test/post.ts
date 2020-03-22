import request from "request-promise"
import fetch from "node-fetch"
import qs from "querystring"

// request({ 
//     uri: "http://localhost:2500/api", 
//     method: "POST",
//     form: {
//         "listId": "1",
//         "title": "Delphia Ward",
//         "desc": "desc 27",
//         "order": 60
//     }
// })

fetch("http://localhost:2500/api", {
    method: "POST",
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "listId": "1",
        "title": "Delphia Ward",
        "desc": "desc 27",
        "order": 60
    })
})