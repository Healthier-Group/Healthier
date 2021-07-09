const bcrypt = require('bcrypt');
const {	User } = require('../db');

const userMockUp = async () => {
    // --- Users ---

    const hashedPasswordA = await bcrypt.hash('123', 12);

    var userN = await User.create({
        name: 'Nicolas',
        username: 'Drivello',
        email: 'Nico@gmail.com',
        password: hashedPasswordA,
        contact: '1127257701',
        isDeleted: false,
    });

    var userS = await User.create({
        name: 'Santiago',
        username: 'CazOfficial',
        email: 'Santi@gmail.com',
        password: hashedPasswordA,
        contact: '8869038',
        isDeleted: false,
    });

    var userJ = await User.create({
        name: 'JuanIgnacio',
        username: 'NachoMacho',
        email: 'Nacho@hotmail.com',
        password: hashedPasswordA,
        contact: '611196',
        isDeleted: false,
    });
}

const adminMockUp = async() => {
    // --- Admin ---

    const hashedPasswordB = await bcrypt.hash('321', 12);

    var system = User.create({
        name: 'System',
        username: 'Administrador',
        isAdmin: true,
        email: 'admin@gmail.com',
        password: hashedPasswordB,
        contact: '1127257701',
    });
}

module.exports = {
    userMockUp,
    adminMockUp
}

