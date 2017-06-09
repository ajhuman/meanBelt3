var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');

module.exports = {
    getAllAppointments: function(req, res) {
        console.log("got to controllers");
        Appointment.find({}, function(err, data) {
            if (err) {
                console.log("Appointment find error", err)
                res.json(err)
            } else {
                console.log("got appts?");
                res.json(data)
            }
        })
    },
    create: function(req, res) {
        console.log("***", req.body)
        var new_appointment = new Appointment(req.body)
        new_appointment.save(function(err) {
            if (err) {
                console.log("Appointment create error", err)
                res.json({
                    added: false,
                    error: err
                })
            } else {
                console.log("Supposedly created appointment");
                res.json({
                    added: true
                })
            }
        })
    },
    delete: function(req, res) {
        Appointment.remove({
            _id: req.params.id
        }, function(err) {
            if (err) {
                console.log("Appointment delete error", err)
            }
            res.json(true)
        })
    }
}

// };

// module.exports = {
//     index: function(req, res) {
//         Appointment.find({}, function(err, appointments) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.json(appointments);
//             }
//         });
//     },
//     create: function(req, res) {
//         console.log(req.body);
//         var appointment = new Appointment({
//             date: req.body.date,
//             name: req.body.name,
//             complaint: req.body.complaint
//         });
//         appointment.save(function(err) {
//             console.log(err);
//         });
//         res.json(appointment);
//     }
// ,
// update: function(req, res) {
//     Appointment.findOne({
//         _id: req.params.id
//     }, function(err, appointment) {
//         appointment.date = req.body.date;
//         appointment.last_name = req.body.last_name;
//         appointment.birthday = req.body.birthday;
//         appointment.save(function(err) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.json(appointment);
//             }
//         });
//     });
// },
// delete: function(req, res) {
//     Appointment.remove({
//         _id: req.params.id
//     }, function(err) {});
// }
// ,
// show: function(req, res) {
//     Appointment.findOne({
//         _id: req.params.id
//     }, function(err, appointment) {
//         console.log(appointment);
//         res.json(appointment);
//     });
// }
