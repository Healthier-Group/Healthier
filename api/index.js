const {server} = require('./src/app.js');
const {conn} = require('./src/db.js');
const {userMockUp, adminMockUp} = require('./src/utils/mockUps')

conn.sync({force: true}).then(() => {
    server.listen(3001, () => {
        console.log('Healthier API is now listening on port 3001');
    })
})

userMockUp();
adminMockUp();
