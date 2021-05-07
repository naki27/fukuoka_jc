// TODO: RESTで行う
// https://github.com/vercel/next.js/tree/canary/examples/api-routes-rest

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'kyota nakamura.' })
}