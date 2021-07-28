const bcrypt = require('bcryptjs');
const {	User } = require('../../db');

const userMockUp = async () => {
    // --- Users ---

    const hashedPasswordA = await bcrypt.hash('123', 12);

    try {

      await User.findOrCreate({where:{
            name: 'Nachito Sanchez',
            username: 'nachito',
            email: 'Nacho@gmail.com',
            password: 'Holahola123',
            contact: '1127257701',
            isDeleted: false,
        }});
    
        await User.findOrCreate({where:{
            name: 'Santiago',
            username: 'CazOfficial',
            email: 'santi@gmail.com',
            password: hashedPasswordA,
            contact: '8869038',
            isDeleted: false,
        }});

    }catch (e) {
        console.log(e.message);
    }
}

const adminMockUp = async() => {
    // --- Admin ---

    const hashedPasswordB = await bcrypt.hash('321', 12);

    try{
        await User.findOrCreate({where:{
            name: 'System',
            username: 'Administrador',
            isAdmin: true,
            email: 'admin@admin.com',
            password: 'Administrador1',
            contact: '1127257701',
        }});
        await User.findOrCreate({where:{
            name: 'System Drivello',
            username: 'AdminDrivello',
            isAdmin: true,
            email: 'nico_dd@outlook.com.ar',
            password: hashedPasswordB,
            contact: '1127257701',
        }});
    }catch (e) {
        console.log(e.message);
    }
}

module.exports = {
    userMockUp,
    adminMockUp
}

