const fs = require("fs")
const Vue = require("vue")
const server = require("express")()
const renderer = require("vue-server-renderer").createRenderer()

server.get("*", (req, res) => {
  const app = new Vue({
    data: {
      title: "SSR",
      content: "hello Vue SSR."
    },
    template: fs.readFileSync("./index.html", "utf-8")
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end("Internal Server Error")
      return
    }
    res.end(html)
  })
})

server.listen(4000)
