const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');
require('dotenv').config();


const connecDB = async () => {
    
    try {
        //Try connect with moongo atlas
        await mongoose.connect(process.env.URI_DB);
        console.log('Success : Connected to MongoDB');

    } catch (error) {

        console.error('Error : Connect to MongoDB:', error.message);
        process.exit(1);
    
    }

};

module.exports = { connecDB }