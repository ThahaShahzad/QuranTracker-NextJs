import Joi from 'joi'

export interface AdminSignUpType {
  firstName: string
  lastName: string
  email: string
  password: string
}
const PasswordSchema = Joi.string()
  .min(2)
  .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
  .required()

export const AdminSignUpSchema = Joi.object({
  firstName: Joi.string().alphanum().required(),
  lastName: Joi.string().alphanum().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .lowercase()
    .required(),
  password: PasswordSchema
})
