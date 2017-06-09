// let games = require("./../controllers/games.js")
// let questions = require("./../controllers/questions.js")
let users = require("./../controllers/users.js")

module.exports = function(app) {
    // app.get("/", user.login)
    app.post("/login", users.login)
    app.get("/login_status", users.check_status)
    app.get("/logout", users.logout)
    // app.get("/games", games.getAllGames)
    // app.post("/create", games.create)
    // app.delete("/delete/:id", games.delete)
    // app.get("/questions", questions.getQuestions)
    // app.post("/qcreate", questions.qcreate)
    // app.delete("/qdelete/:id", questions.qdelete)
}
