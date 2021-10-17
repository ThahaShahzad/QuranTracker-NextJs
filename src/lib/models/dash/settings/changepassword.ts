import Joi from 'joi'

export interface ChangePasswordType {
  oldPassword: string
  newPassword: string
}
const PasswordSchema = Joi.string()
  .min(2)
  .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
  .required()

export const ChangePasswordSchema = Joi.object({
  oldPassword: PasswordSchema,
  newPassword: PasswordSchema
})
