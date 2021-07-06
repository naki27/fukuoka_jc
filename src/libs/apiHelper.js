// let endpoint = process.env.FAUNADB_GRAPHQL_ENDPOINT;
let endpoint = "https://fukuokajc2022.hasura.app/v1/graphql";
// let secret = NEXT_PUBLIC_FAUNADB_SECRET;
let secret = "EHtoYLe5QfSaoPd51YAcONiWwXagS3KVC9Iti2opsFR6YEbclLWEaCdkgm5u5uWp";

export async function useFetch(query, variables) {

  let data;
  let error;
  let options = {
    method: 'POST',
    headers: {
      'x-hasura-admin-secret': `${secret}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: variables,
    }),
  }

  const fetchData = async () => {
    try {
      console.log("request to -> " + endpoint)
      const res = await fetch(endpoint, options)
      const json = await res.json()
      console.log("response by -> " + JSON.stringify(json))

      data = getData(json)
      error = getErrorMessage(undefined, json)
    } catch (e) {
      console.log("error -> " + JSON.stringify(e))
      error = e
    }
  }
  await fetchData()
  return { data, error }
}

function getData(data) {
  if (!data || data.errors) return null
  return data.data
}

function getErrorMessage(error, data) {
  if (error) return error.message
  if (data && data.errors) {
    return data.errors[0].message
  }
  return null
}