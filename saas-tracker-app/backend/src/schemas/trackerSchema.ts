import { gql } from 'apollo-server-express';

const trackerSchema = gql`
  type Tracker {
    id: ID!
    name: String!
    type: String!
    data: [Float!]!
  }

  input CreateTrackerInput {
    name: String!
    type: String!
  }

  type Query {
    getTrackers: [Tracker!]!
    getTracker(id: ID!): Tracker
  }

  type Mutation {
    createTracker(input: CreateTrackerInput!): Tracker!
    updateTracker(id: ID!, data: [Float!]!): Tracker!
    deleteTracker(id: ID!): Boolean!
  }
`;

export default trackerSchema;