const express = require("express");

const { schemas } = require("../../models/contact");

const { isValidId, validateBody, authenticate } = require("../../middlewares");

const contactsController = require("../../controllers/contacts-controller");

const router = express.Router();

router.use(authenticate);

router.get("/", contactsController.getAllContacts);

router.get("/:id", isValidId, contactsController.getContactById);

router.post(
  "/",
  validateBody(schemas.contactAddSchema),
  contactsController.addContact
);

router.delete("/:id", isValidId, contactsController.removeContact);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.contactAddSchema),
  contactsController.updateContact
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  contactsController.updateFavorite
);

module.exports = router;
