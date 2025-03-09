import {useFetch} from '../../libs/apiHelper'

const getAllQuery = `query GetTeamAll @cached {
  fukuokajc_Team {
    departmentId
    id
    name
    prefectures
  }
}`

const getByDepartmentIdQuery = `query GetTeamByDepartment($departmentId: Int) @cached {
  fukuokajc_Team(where: {departmentId: {_eq: $departmentId}}) {
    departmentId
    id
    name
    prefectures
  }
}`

export default async (req, res) => {
  let departmentId = req.query.departmentId;
  let query = departmentId ? getByDepartmentIdQuery : getAllQuery;

  useFetch(
    query, { departmentId }
  ).then((results) => {
    if (results.error) {
      console.log("in then response error -> " + JSON.stringify(results.error))
      return;
    }
    res.statusCode = 200
    res.json({
      data: results.data,
      error: results.error
    })
  }).catch((e) => {
    console.log("api called error -> " + e)
    res.statusCode = 500
    res.json({
      error: e
    })
  })
}