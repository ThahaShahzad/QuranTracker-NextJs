import { Document, Schema } from 'mongoose'
import { connection } from 'mongoose'

const school = new Schema({
  name: String,
  state: String,
  city: String,
  type: String,
  email: String,
  phone: String
})
const userSchema = new Schema({
  tenant: String,
  client_id: String,
  connection: String,
  email: String,
  password: String,
  transaction: Object,
  request_language: String,
  email_verified: Boolean,
  submittedApplication: Boolean,
  isActivated: Boolean,
  accType: String,
  school: school,
  teacherClasses: [{ type: Schema.Types.ObjectId, ref: 'Classes' }],
  children: [{ type: Schema.Types.ObjectId, ref: 'Students' }]
})
export interface IUser extends Document {
  _id: string
  tenant: string
  client_id: string
  connection: string
  email: string
  password: string
  transaction?: {}
  request_language?: string
  email_verified?: boolean
  submittedApplication?: boolean
  isActivated?: boolean
  accType?: 'admin' | 'teacher' | 'parent'
  school: {
    _id: string
    name: string
    state: string
    city: string
    type: 'Islamic' | 'Masjid' | 'Other'
    email: string
    phone: string
  }
  teacherClasses: string[]
  children: string[]
}

const Users = connection.model<IUser>('Users', userSchema, 'users')

export default Users
