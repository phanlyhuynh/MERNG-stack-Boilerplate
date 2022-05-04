const moongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = moongoose.Schema({
    full_name: String,
    username: String,
    email: String,
    password: String,
});

userSchema.pre('save', async function() {
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
});

module.exports = moongoose.model('User', userSchema);
