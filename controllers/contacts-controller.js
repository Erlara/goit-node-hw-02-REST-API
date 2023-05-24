const { Contact } = require("../models/contact");

const { schema } = require("../models/contact");

const { HttpError } = require("../helpers");

const getAllContacts = async (req, res, next) => {
  try {
    const result = await Contact.find();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// const getContactById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const result = await contactsService.getContactById(id);
//     if (!result) {
//       throw HttpError(404, `Movie with ${id} not found`);
//     }
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// };

const addContact = async (req, res, next) => {
  try {
    const { error } = schema.contactAddSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const result = await Contact.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

// const removeContact = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const result = await contactsService.removeContact(id);
//     if (!result) {
//       throw HttpError(404, `Movie with ${id} not found`);
//     }
//     res.json({
//       message: "Delete success",
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// const updateContact = async (req, res, next) => {
//   try {
//     const { error } = contactAddSchema.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message);
//     }
//     const { id } = req.params;
//     const result = await contactsService.updateContact(id, req.body);
//     if (!result) {
//       throw HttpError(404, `Movie with ${id} not found`);
//     }
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
  getAllContacts,
  // getContactById,
  addContact,
  // removeContact,
  // updateContact,
};
