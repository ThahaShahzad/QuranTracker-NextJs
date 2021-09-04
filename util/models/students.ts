import { Document, Schema } from 'mongoose'
import { connection } from 'mongoose'

const studentsSchema = new Schema({
  parentEmail: String,
  firstName: String,
  lastName: String,
  age: Number,
  grade: String,
  studentClasses: [{ type: Schema.Types.ObjectId, ref: 'Classes' }]
})
export interface IStudents extends Document {
  _id: string
  parentEmail: string //refrenced from users docuement if parent acc
  firstName: string
  lastName: string
  age: number
  grade?: string
  studentClasses: string[]
}

const Students = connection.model<IStudents>('Students', studentsSchema, 'students')

export default Students
