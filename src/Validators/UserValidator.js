const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");
const { default: mongoose } = require("mongoose");

const create = validateRequest({
  body: z.object({
    name: z
      .string({ required_error: "Nome deve ser uma string" })
      .nonempty({ message: "Nome não pode estar vazio" }),
    password: z
      .string({ required_error: "Password deve ser uma string" })
      .nonempty({ message: "Password não pode estar vazio" }),
    type: z
      .string({ required_error: "Type deve ser uma string" })
      .nonempty({ message: "Type não pode estar vazio" }),
    office: z
      .string({ required_error: "Office deve ser uma string" })
      .nonempty({ message: "Office não pode estar vazio" }),
  }),
});

const update = validateRequest({
  body: z.object({
    name: z
      .string({ required_error: "Nome deve ser uma string" })
      .nonempty({ message: "Nome não pode estar vazio" }),
    password: z
      .string({ required_error: "Password deve ser uma string" })
      .nonempty({ message: "Password não pode estar vazio" }),
    type: z
      .string({ required_error: "Type deve ser uma string" })
      .nonempty({ message: "Type não pode estar vazio" }),
    office: z
      .string({ required_error: "Office deve ser uma string" })
      .nonempty({ message: "Office não pode estar vazio" }),
  }),
});

const read = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "The ID is not valid"),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "The ID is not valid"),
  }),
});

module.exports = {
  create,
  update,
  destroy,
  read,
};
