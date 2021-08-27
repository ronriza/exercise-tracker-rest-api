const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html')


// extension for sanitizing html
const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value });
                return clean;
            }
        }
    }
})


const Joi = BaseJoi.extend(extension)

module.exports.exerciseJoiSchema = Joi.object({

    name: Joi.string().required().escapeHTML(),
    reps: Joi.number().required(),
    sets: Joi.number().required(),
    weight: Joi.number().required(),
    unit: Joi.string().required().escapeHTML(),
    date: Joi.string().required().escapeHTML(),

})