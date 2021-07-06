import {useFetch} from '../../libs/apiHelper'

const getAllQuery = `query GetDepartmentAll {
  fukuokajc2022_Department {
    age
    id
    name
    sex
  }
}`

const getBySexQuery = `query GetDepartmentBySex($sex: String) {
  fukuokajc2022_Department(where: {sex: {_eq: $sex}}) {
    name
    id
    age
    sex
  }
}`

export default async (req, res) => {
  let sex = req.query.sex;
  let query = sex ? getBySexQuery : getAllQuery;

  useFetch(
    query, { sex }
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