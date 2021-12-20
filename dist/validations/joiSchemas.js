import Joi from 'joi';
const newExamSchema = Joi.object().length(6).keys({
    newExamTitle: Joi.string().required(),
    newExamUrl: Joi.string().required(),
    chosenCategory: Joi.string().required(),
    chosenProfessor: Joi.string().required(),
    chosenSubject: Joi.string().required(),
    chosenSchool: Joi.string().required(),
});
const queryFiltersSchema = Joi.object().keys({
    school: Joi.string().allow(''),
    category: Joi.string().allow(''),
    professor: Joi.string().allow(''),
    subject: Joi.string().allow(''),
});
export { newExamSchema, queryFiltersSchema };
