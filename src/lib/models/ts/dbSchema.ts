export interface DbSchema {
  users: {
    _id: string
    tenant: string
    client_id: string
    connection: string
    email: string
    password: string
    transaction: {}
    request_language: string
    name: string // manually add ourselfs and override auth0 default
    given_name: string // manually add ourselfs
    family_name: string // manually add ourselfs
    email_verified: false
    submittedApplication: false
    isActivated: false
    accType: 'admin' | 'teacher' | 'parent'
    school: {
      _id: string
      name: string
      state: string
      city: string
      type: 'Islamic' | 'Masjid' | 'Other'
      email: string
      phone: string
    } //refrenced from school docuement
    teacherClasses: string[] // only for teachers, array of objectID of class
    children: string[] // only for parents, array of objectID of their children
  }
  schools: {
    _id: string //refrenced from school subDocuement
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
  classes: {
    _id: string
    name: string
    teacherId: string //refrenced from users docuement
    students: string[] //refrences from students docuement
    classStats: {
      numberOfStudents: number
      attendance: string //refrences from attendance docuement LATER
    }
  }
  students: {
    _id: string
    parentId: string //refrenced from users docuement if parent acc
    firstName: string
    lastName: string
    age: number
    grade?: string
    classes: string[]
  }
}
