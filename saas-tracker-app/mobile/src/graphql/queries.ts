import { gql } from 'apollo-boost';

export const GET_TRACKERS = gql`
  query GetTrackers {
    trackers {
      id
      name
      type
      data
    }
  }
`;

export const CREATE_TRACKER = gql`
  mutation CreateTracker($name: String!, $type: String!) {
    createTracker(name: $name, type: $type) {
      id
      name
      type
      data
    }
  }
`;

export const UPDATE_TRACKER = gql`
  mutation UpdateTracker($id: ID!, $data: String!) {
    updateTracker(id: $id, data: $data) {
      id
      name
      type
      data
    }
  }
`;