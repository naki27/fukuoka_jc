import {useFetch} from '../../libs/apiHelper'

const getByIpUaQuery = `query GetAllowedTermByIpUa($ip: String, $ua: String) {
  fukuokajc2022_AllowedTerm(where: {ip: {_eq: $ip}, ua: {_eq: $ua}}) {
    createdAt
    expireAt
    id
    ip
    name
    ua
  }
}`

export default async (req, res) => {
  let ip = req.query.ip
  let ua = req.query.ua
  let query = getByIpUaQuery;

  useFetch(
    query, {ip, ua}
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