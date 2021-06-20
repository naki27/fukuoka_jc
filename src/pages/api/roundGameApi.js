import {useFetch} from '../../libs/apiHelper'

const getAllQuery = `query GetRoundGameAll {
  fukuokajc2022_RoundGame {
    buttleFormat
    id
    name
  }
}`

const getByButtleFormatQuery = `query GetRoundGameByButtleFormat($buttleFormat: String) {
  fukuokajc2022_RoundGame(where: {buttleFormat: {_eq: $buttleFormat}}) {
    buttleFormat
    id
    name
  }
}`

export default async (req, res) => {
  let buttleFormat = req.query.buttleFormat;
  let query = buttleFormat ? getByButtleFormatQuery : getAllQuery;

  useFetch(
    query, { buttleFormat }
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