const bcrypt = require('bcryptjs');
const {	User } = require('../../db');

const userMockUp = async () => {
    // --- Users ---

    const hashedPasswordA = await bcrypt.hash('123', 12);

    try {
        var userN = await User.create({
            name: 'Nicolas Sanchez',
            username: 'Drivello',
            email: 'nico@gmail.com',
            password: hashedPasswordA,
            contact: '1127257701',
            isDeleted: false,
        });
    
        var userS = await User.create({
            name: 'Santiago',
            username: 'CazOfficial',
            email: 'santi@gmail.com',
            password: hashedPasswordA,
            contact: '8869038',
            isDeleted: false,
        });
    
        var userJ = await User.create({
            name: 'Marcelo',
            username: 'AgachateyConocelo',
            email: 'marce@hotmail.com',
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
            email: 'admin@admin.com',
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

