const { User } = require('../models/user.model');

async function findUserById(uid) {

    try {
        
        user = await User.findById(uid);
        
        if (!user) {
            console.error('No se encontro un usuario correspondiente al Uid');
            return false;
        }
        return user;
    
    } catch (error) {
        console.error(error.message);
        return false;
    }


};

async function findUserByUidFB(uid) {

    try {

        user = await User.findOne({uidFB: uid});

        if (!user) {
            console.error('No se encontro un usuario correspondiente al Uid');
            return false;
        }
        return user;
    
    } catch (error) {
        console.error(error.message);
        return false;
    }


};


module.exports = {
    findUserByUidFB,
    findUserById

}