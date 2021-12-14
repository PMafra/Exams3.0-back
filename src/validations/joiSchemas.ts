import Joi from 'joi';

const exampleSchema = Joi.object().length(3).keys({
  id: Joi.number().min(1).required(),
  name: Joi.string().min(1).required(),
  token: Joi.string().min(1).required(),
});

export { exampleSchema };
