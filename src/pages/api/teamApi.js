import {useFetch} from '../../libs/apiHelper'

const getAllQuery = `query GetTeamAll {
  fukuokajc2022_Team {
    depertmentId
    id
    name
    prefectures
  }
}`

const getByDepertmentIdQuery = `query GetTeamByDepertment($depertmentId: Int) {
  fukuokajc2022_Team(where: {depertmentId: {_eq: $depertmentId}}) {
    depertmentId
    id
    name
    prefectures
  }
}`

export default async (req, res) => {
  let depertmentId = req.query.depertmentId;
  let query = depertmentId ? getByDepertmentIdQuery : getAllQuery;

  useFetch(
    query, { depertmentId }
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