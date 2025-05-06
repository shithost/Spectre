const auth = async (req, res, next) => {
    if (!req.cookies.authToken) {
        return res.redirect('/');
    }
    next();
};

module.exports = auth;