import db from "../models/index.js";

const Contact = db.Contact;

export const createContact = async (req, res) => {
  try {

    const contact = await Contact.create(req.body);

    res.status(201).json({
      success: true,
      data: contact
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


export const getContacts = async (req, res) => {
  try {

    const contacts = await Contact.findAll({
      order: [["createdAt", "DESC"]]
    });

    res.json({
      success: true,
      data: contacts
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


export const deleteContact = async (req, res) => {
  try {

    await Contact.destroy({
      where: { id: req.params.id }
    });

    res.json({
      success: true,
      message: "Contact deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};