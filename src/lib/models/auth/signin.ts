import Joi from 'joi'

export interface SignInType {
  email: string
  password: string
}
export const SignInSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .lowercase()
    .required(),
  password: Joi.string()
})
