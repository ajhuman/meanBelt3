let users = require("./../controllers/users.js")
let appointments = require("./../controllers/appointments.js")

module.exports = function(app) {
    app.post("/login", users.login);
    app.get("/login_status", users.check_status);
    app.get("/logout", users.logout);
    app.get("/appointments", appointments.getAllAppointments);
    app.post("/appointment", appointments.create);
    app.delete("/appointment/:id", appointments.delete);

}
