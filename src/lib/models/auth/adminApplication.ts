import Joi from 'joi'

export interface AdminApplicationType {
  schoolName: string
  state:
    | 'New York'
    | 'California'
    | 'Illinois'
    | 'Texas'
    | 'Pennsylvania'
    | 'Arizona'
    | 'Florida'
    | 'Indiana'
    | 'Ohio'
    | 'North Carolina'
    | 'Michigan'
    | 'Tennessee'
    | 'Massachusetts'
    | 'Washington'
    | 'Colorado'
    | 'District of Columbia'
    | 'Maryland'
    | 'Kentucky'
    | 'Oregon'
    | 'Oklahoma'
    | 'Wisconsin'
    | 'Nevada'
    | 'New Mexico'
    | 'Missouri'
    | 'Virginia'
    | 'Georgia'
    | 'Nebraska'
    | 'Minnesota'
    | 'Kansas'
    | 'Louisiana'
    | 'Hawaii'
    | 'Alaska'
    | 'New Jersey'
    | 'Idaho'
    | 'Alabama'
    | 'Iowa'
    | 'Arkansas'
    | 'Utah'
    | 'Rhode Island'
    | 'Mississippi'
    | 'South Dakota'
    | 'Connecticut'
    | 'South Carolina'
    | 'New Hampshire'
    | 'North Dakota'
    | 'Montana'
    | 'Delaware'
    | 'Maine'
    | 'Wyoming'
    | 'West Virginia'
    | 'Vermont'
  city: string
  type: 'Islamic' | 'Masjid' | 'Other'
  email: string
  phone: string
}

export const AdminApplicationSchema = Joi.object({
  schoolName: Joi.string().required(),
  state: Joi.string().required(),
  city: Joi.string().required(),
  type: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .lowercase()
    .required(),
  phone: Joi.string().min(10).max(11).required()
})
