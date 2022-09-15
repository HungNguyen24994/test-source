import { gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
  query User {
    currentUser {
      id
      name
      avatar
      username
    }
  }
`;
