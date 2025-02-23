import * as Joi from 'joi';

import { AppConfig, Environment } from '@project/lib/shared/app/types';
import { createMessage } from '@project/lib/shared/helpers';

import { APP_DEFAULT_PORT, APP_VALIDATE_ERROR_MESSAGE } from './helpers.constant';

const appSchema = Joi.object({
  environment: Joi.string().valid(...Object.values(Environment)).required(),
  port: Joi.number().port().required(),
  host: Joi.string().required()
});

function validateAppConfig(config: AppConfig): void {
  const { error } = appSchema.validate(config, { abortEarly: true });

  if (error) {
    throw new Error(createMessage(APP_VALIDATE_ERROR_MESSAGE, [error.message]));
  }
}

export function getAppConfig(): AppConfig {
  const config: AppConfig = {
    environment: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10) || APP_DEFAULT_PORT,
    host: process.env.HOST
  };
  validateAppConfig(config);

  return config;
}
