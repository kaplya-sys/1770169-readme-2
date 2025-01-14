import * as Joi from 'joi';

export const jwtValidationSchema = Joi.object({
  accessTokenSecret: Joi.string().required(),
  accessTokenExpiresIn: Joi.string().required(),
});
