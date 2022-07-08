let userController = {
    login: (req, res) => {
        res.render("login");
    },
    signin: (req, res) => {
        res.render("signin");
    },
    processLogin: (req, res) => {
        res.send("process");
    },
    processSignin: (req, res) => {
        res.send("process");
    }
}

module.exports = userController;