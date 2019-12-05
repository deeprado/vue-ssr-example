const fs = require("fs")
const Vue = require("vue")
const server = require("express")()
const renderer = require("vue-server-renderer").createRenderer({
  template: fs.readFileSync("./index.html", "utf-8")
})
const createApp = require("./routes/app")

server.get("*", (req, res) => {
  const context = {
    title: "vue ssr",
    meta: `
          <meta charset="utf-8"/>
        `,
    url: req.url
  }

  const app = createApp(context)

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end("Internal Server Error")
      return
    }
    res.end(html)
  })
})

server.listen(4000)
