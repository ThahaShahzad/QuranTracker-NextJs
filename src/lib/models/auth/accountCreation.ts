import Joi from 'joi'

export interface ParentAccountType {
  'First Name': string
  'Last Name': string
  Email: string
  'Child(ren)': any
}

export interface StudentAccountType {
  'Student ID': string
  'Parent Email': string
  'First Name': string
  'Last Name': string
  Age: string
  Grade: string
}
export interface TeacherAccountType {
  'First Name': string
  'Last Name': string
  Email: string
}
export interface ClassesType {
  Name: string
  "Teacher's email": string
  Students: any
}

export const ParentAccountSchema = Joi.array().items(
  Joi.object({
    'First Name': Joi.string().required(),
    'Last Name': Joi.string().required(),
    Email: Joi.string()
      .email({ tlds: { allow: false } })
      .lowercase()
      .required(),
    'Child(ren)': Joi.array().items(Joi.string()).required()
  })
)
export const StudentAccountSchema = Joi.array().items(
  Joi.object({
    'Student ID': Joi.string().required(),
    'Parent Email': Joi.string()
      .email({ tlds: { allow: false } })
      .lowercase()
      .required(),
    'First Name': Joi.string().required(),
    'Last Name': Joi.string().required(),
    Age: Joi.string().required(),
    Grade: Joi.string().required()
  })
)
export const TeacherAccountSchema = Joi.array().items(
  Joi.object({
    'First Name': Joi.string().required(),
    'Last Name': Joi.string().required(),
    Email: Joi.string()
      .email({ tlds: { allow: false } })
      .lowercase()
      .required()
  })
)
export const ClassesSchema = Joi.array().items(
  Joi.object({
    Name: Joi.string().required(),
    "Teacher's email": Joi.string()
      .email({ tlds: { allow: false } })
      .lowercase()
      .required(),
    Students: Joi.array().items(Joi.string()).required()
  })
)
