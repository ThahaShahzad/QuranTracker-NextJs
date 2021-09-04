import { Document, Schema } from 'mongoose'
import { connection } from 'mongoose'

const classesSchema = new Schema({
  name: String,
  teacherId: { type: Schema.Types.ObjectId, ref: 'Users' },
  students: [{ type: Schema.Types.ObjectId, ref: 'Students' }]
})
export interface IClasses extends Document {
  _id: string
  name: string
  teacherId: string //refrenced from users docuement
  students: string[] //refrences from students docuement
  // implement later
  classStats: {
    numberOfStudents: number
    attendance: string //refrences from attendance docuement
  }
}

const Classes = connection.model<IClasses>('Classes', classesSchema, 'classes')

export default Classes
