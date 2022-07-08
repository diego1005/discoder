const generator = require("../../public/js/main");

let code = generator();
let len = 16;

let codeController = {
    begin: (req, res) => {
        res.render("code", { len : len });
    },
    checkCode: (req, res) => {
        let new_code = code;
        let characters = Object.values(req.body);
        let result = new_code.map((el, i) => (el === characters[i]) ? el : null );
        res.render("home", { result : result, len : len })
    }
}

module.exports = codeController;