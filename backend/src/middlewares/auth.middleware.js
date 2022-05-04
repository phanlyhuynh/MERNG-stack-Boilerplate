const authenticate = (req) => {
    if (!req.isAuth) {
        throw new Error("Unauthorized");
    }
};

module.exports = authenticate;
