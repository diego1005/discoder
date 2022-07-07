const generator = require("../../public/js/main");

let code = generator();
let len = 16;

let indexController = {
    home: (req, res) => {
        res.render("home", { len : len, code : code });
    },
    checkCode: (req, res) => {
        let new_code = code;
        let characters = Object.values(req.body);
        let result = new_code.map((el, i) => (el === characters[i]) ? el : null );
        // console.log(result);
        res.render("home", { result : result, len : len, code : code })
    }
}

module.exports = indexController;