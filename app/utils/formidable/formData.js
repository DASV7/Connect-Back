// const formidable = require("formidable");
// const validate = require("../validates/validate");

// const formData = async (req, res, next) => {
//     if (validate.isEmptyObj(req.body)) {
//         const form = new formidable.IncomingForm();
//         const myData = await new Promise((resolve, reject) => {
//             form.parse(req, async (err, fields, files) => {
//                 const $formData = {
//                     ...fields,
//                     ...files,
//                 };
//                 resolve($formData);
//             });
//         });
//         req.body = myData;
//     }
//     next();
// };

// module.exports = { formData };
