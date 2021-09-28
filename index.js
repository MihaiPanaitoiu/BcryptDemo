const bcrypt = require('bcrypt');
const {hashSync} = require("bcrypt");
// const {hash} = require("bcrypt");

const hashPassword = async(pw) =>{
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login = async (pw, hashPassword) => {
    const result = await bcrypt.compare(pw, hashPassword);
    if (result) {
        console.log('logged in')
    } else {
        console.log ('incorrect pw')
    }
}

// hashPassword('monkey');
login('monkey', '$2b$12$L.9PJhkQcDGfBEJYljPeGeeECCrsy1hdEDWg9YbfjEgS51jTznj0y')