import "babel-core/polyfill"

import React from "react"

import Router from "react-router"

import routes from "routes"

let mountNode = document.getElementById("app")

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body)
})
