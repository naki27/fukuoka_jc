import {useFetch} from '../../libs/apiHelper'

const getAllQuery = `query GetRoundGameAll {
  fukuokajc2022_RoundGame(where: {valid: {_eq: true}}, order_by: {sortBy: asc}) {
    battleFormat
    id
    name
  }
}`

const getByBattleFormatQuery = `query GetRoundGameByBattleFormat($battleFormat: String) {
  fukuokajc2022_RoundGame(where: {battleFormat: {_eq: $battleFormat}, valid: {_eq: true}}, order_by: {sortBy: asc}) {
    battleFormat
    id
    name
  }
}`

export default async (req, res) => {
  let battleFormat = req.query.battleFormat;
  let query = battleFormat ? getByBattleFormatQuery : getAllQuery;

  useFetch(
    query, { battleFormat }
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