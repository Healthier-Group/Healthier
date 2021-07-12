const bcrypt = require('bcrypt');
const {	User } = require('../db');

const userMockUp = async () => {
    // --- Users ---

    const hashedPasswordA = await bcrypt.hash('123', 12);

    try {
        var userN = await User.create({
            name: 'Nicolas Sanchez',
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
            name: 'Marcelo',
            username: 'AgachateyConocelo',
            email: 'Marce@hotmail.com',
            password: hashedPasswordA,
            contact: '696969',
            isDeleted: false,
        });
    }catch (e) {
        console.log(e.message);
    }
}

const adminMockUp = async() => {
    // --- Admin ---

    const hashedPasswordB = await bcrypt.hash('321', 12);

    try{
        var system = await User.create({
            name: 'System',
            username: 'Administrador',
            isAdmin: true,
            email: 'admin@gmail.com',
            password: hashedPasswordB,
            contact: '1127257701',
        });
    }catch (e) {
        console.log(e.message);
    }
}

module.exports = {
    userMockUp,
    adminMockUp
}

