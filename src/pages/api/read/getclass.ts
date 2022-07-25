import { Lambda, Map, Paginate, Match, Index, Ref, Collection, Var, Let, Get, Select, Merge } from 'faunadb'
import { faunaClient } from 'lib/config/clients/fauna'
import { Classes } from 'lib/graphql/generated'
import { withFireBaseAuth } from 'lib/middleware/apiMiddleware'
import { faunaRes } from 'lib/models/faunaRes'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { classId } = req.query as any
  try {
    const Class: faunaRes<[Classes]> = await faunaClient.query(
      // Map(
      // Paginate(Match(Index('classes_teacher_by_user'), Ref(Collection('user'), teacherId))),
      // Lambda(
      //   'classRef',
      Let(
        {
          class: Get(Ref(Collection('classes'), classId)),
          students: Map(Select(['data', 'students'], Get(Ref(Collection('classes'), classId))), Lambda('Y', Get(Var('Y'))))
        },
        Merge(Var('class'), {
          data: Merge(Select('data', Var('class')), {
            students: Map(
              Var('students'),
              Lambda(
                'Z',
                Merge(Var('Z'), {
                  data: Merge(Select(['data'], Var('Z')), {
                    assignments: Select(
                      ['data'],
                      Map(
                        Paginate(Match(Index('assignment_student_by_student'), Ref(Collection('student'), Select(['ref', 'id'], Var('Z')))), {
                          size: 2,
                          before: null
                        }),
                        Lambda('X', Get(Var('X')))
                      )
                    )
                  })
                })
              )
            )
          })
        })
      )
    )
    // )
    // )
    res.json(Class)
  } catch (error: any) {
    res.send('error')
  }
}
export default withFireBaseAuth(handler)
