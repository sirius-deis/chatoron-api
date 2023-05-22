const { body } = require('express-validator');

exports.isEmail = () => body('email').trim().isEmail().escape();
exports.isNotEmptyWithLength = (field, min = 4, max) =>
    body(field)
        .trim()
        .notEmpty()
        .isLength({ min, max: max ?? undefined })
        .escape();

exports.comparePasswords = (password1, password2) => {
    return password1 === password2;
};
