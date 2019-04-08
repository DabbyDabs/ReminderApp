const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'pass',
    database: 'mytestdb'

})

function getAllReminders() {

    return new Promise(function (resolve, reject) {
        connection.query(
            `SELECT * FROM reminder`,
            function (err, rows,cols) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(rows);
                }
            }
        )
    })


}

function addReminder(reminder, name) {

    return new Promise(function (resolve, reject) {
        connection.query(
            `INSERT INTO reminder (reminder,name) values(?,?)`,
            [reminder,name],
            function (err, results) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve();
                }
            }
        )
    })


}




exports= module.exports ={
    getAllReminders,
    addReminder
}