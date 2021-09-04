import { Document, Schema } from 'mongoose'
import { connection } from 'mongoose'

const usersInfo = new Schema({
  adminUsers: [String], //refrenced from users docuement
  noOfAdmins: Number,
  noOfTeachers: Number,
  noOfParents: Number,
  noOfStudents: Number
})
const statistics = new Schema({
  totalSurahsMemorized: Number,
  totalAyahsMemorized: Number,
  monthlySurahsMemorized: Number,
  monthlyAyahsMemorized: Number
})
const schoolSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, ref: 'Users.school' },
  schoolClasses: [{ type: Schema.Types.ObjectId, ref: 'Classes' }],
  usersInfo,
  statistics
})
export interface ISchools extends Document {
  _id: string
  schoolClasses: string[] //refrenced from classes docuement
  usersInfo: {
    adminUsers: string[] //refrenced from users docuement
    noOfAdmins: number
    noOfTeachers: number
    noOfParents: number
    noOfStudents: number
  }
  statistics: {
    totalSurahsMemorized: number
    totalAyahsMemorized: number
    monthlySurahsMemorized: number
    monthlyAyahsMemorized: number
  }
}

const Schools = connection.model<ISchools>('Schools', schoolSchema, 'schools')

export default Schools
