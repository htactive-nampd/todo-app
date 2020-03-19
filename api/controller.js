"use strict"
const fs = require("fs")
const dataPath = __dirname + "/data/data.json"

module.exports = {

    getlist: function (req, res) {

        const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"))
        res.status(200).json(data)

        return
    },

    post: function (req, res) {

        if (req.body.listID && req.body.title && req.body.desc) {

            const { listID, title, desc } = req.body
            /* readFile and add new data */
            let data = JSON.parse(fs.readFileSync(dataPath, "utf-8"))
                data.push({ listID, title, desc })

            /* write file */
            fs.writeFileSync(dataPath, JSON.stringify(data), "utf-8")

            res.status(201).json({err: false, message: "success."})
        } 
        else res.status(400).json({err: true, message: "invalid params."})
        return
    },

    listDetail: function (req, res) {

    },

    update: function (req, res) {

    },

    delete: function (req, res) {

    },
}