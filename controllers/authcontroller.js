var exports = module.exports = {}

exports.signup = function(req, res) {
    res.render("signup");
};

exports.signin = function(req, res) {
    res.render("signin");
};

exports.order = function(req, res) {
    res.render("order");
};

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        req.logout();
        res.redirect("/");
    });
};