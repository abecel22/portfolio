const path = require("path")
const fs = require("fs")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const data = JSON.parse(
    fs.readFileSync("./src/data/projectsInfo.json", {
      encoding: "utf-8",
    })
  )

  const projectDetailTemplate = path.resolve(
    "src/templates/projectDetailPage.js"
  )

  data.pages.forEach(page => {
    createPage({
      path: page.slug,
      component: projectDetailTemplate,
      context: page,
    })
  })
}
