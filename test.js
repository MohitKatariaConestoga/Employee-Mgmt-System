const dbEmp = require('./server/models/employees');

module.exports = async() => {
    await dbEmp.deleteMany({});
    // this is git test
}
