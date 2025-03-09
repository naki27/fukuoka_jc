import { gql } from '@apollo/client';

export const getLast5 = gql`query GetLast5($sex: String_comparison_exp = {}) @cached {
  fukuokajc_MatchResult(limit: 6, order_by: {createdAt: desc}, where: {Department: {sex: $sex, valid: {_eq: true}}}) {
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
      prefectures
    }
    teamByTeam2id {
      name
      prefectures
    }
    firstSet
    secondSet
    thirdSet
    summary
    createdBy
    createdAt
  }
}`

export const getAll = gql`query GetAll($sex: String_comparison_exp = {}) @cached {
  fukuokajc_MatchResult(order_by: {createdAt: desc}, where: {Department: {sex: $sex, valid: {_eq: true}}}) {
    id
    Department {
      id
      sex
      age
      name
    }
    RoundGame {
      battleFormat
      name
    }
    Team {
      name,
      prefectures
    }
    teamByTeam2id {
      name,
      prefectures
    }
    firstSet
    secondSet
    thirdSet
    summary
    createdBy
    createdAt
  }
}`

export const addMatchResult = gql`mutation AddMatchResult($object: fukuokajc_MatchResult_insert_input = {}) {
    insert_fukuokajc_MatchResult_one(object: $object) {
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

// TODO InValidMatchResult　valid がないけど？？

export const inValidMatchResult = gql`mutation InValidMatchResult($id: Int) {
  update_fukuokajc_MatchResult(_set: {valid: false}, where: {id: {_eq: $id}}) {
    returning {
      id
    }
    affected_rows
  }
}`