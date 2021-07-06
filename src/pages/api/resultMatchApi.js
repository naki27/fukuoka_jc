import { gql, useMutation, useQuery } from '@apollo/client';

export const getLast5 = gql`query GetLast5($sex: String_comparison_exp = {}) {
    fukuokajc2022_MatchResult(limit: 5, order_by: {createdAt: desc}, where: {Department: {sex: $sex}}) {
      id
      Department {
        age
        name
      }
      RoundGame {
        battleFormat
        name
      }
      Team {
        name
      }
      teamByTeam2id {
        name
      }
      firstSet
      secondSet
      thirdSet
      summary
      createdBy
      createdAt
    }
  }`


export const addMatchResult = gql`mutation AddMatchResult($object: fukuokajc2022_MatchResult_insert_input = {}) {
    insert_fukuokajc2022_MatchResult_one(object: $object) {
      id
      departmentId
      roundGameId
      team1Id
      team2Id
      firstSet
      secondSet
      thirdSet
      summary
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
}`
