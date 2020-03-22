const request = require("request-promise")
const qs = require("querystring")

let form = qs.stringify({
    listID: 2,
    title: "SClaire Runolfsson",
    desc: "desc 3"
})

request({
    method: "POST",
    uri: "http://localhost:2500/api",
    form: form
    
}).then(console.log)