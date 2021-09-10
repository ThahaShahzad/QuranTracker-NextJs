import Joi from 'joi'

export interface AdminSignUpType {
  userName: string
  email: string
  password: string
}
const PasswordSchema = Joi.string()
  .min(2)
  .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
  .required()

export const AdminSignUpSchema = Joi.object({
  userName: Joi.string().min(6).max(32).alphanum().lowercase().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .lowercase()
    .required(),
  password: PasswordSchema
})
