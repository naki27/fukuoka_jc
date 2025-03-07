import {useFetch} from '../../libs/apiHelper'

const getOneQuery = `query GetOne @cached {
  fukuokajc2025_Secret_by_pk(id: 1) {
    adminPassword
    id
    invalid
    password
  }
}`

export default async (req, res) => {
  let query = getOneQuery;

  useFetch(
    query
  ).then((results) => {
    if (results.error) {
      console.log("in then responce error -> " + JSON.stringify(results.error))
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