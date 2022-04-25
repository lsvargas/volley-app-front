import { gql } from "@apollo/client";

const FETCH_LIST = gql`
  query List($listId: ID!) {
    list(id: $listId) {
      id
      name
      date
      users {
        id
        userId
        name
        lastname
        status
      }
    }
  }
`;

const UPDATE_USER_LIST = gql`
  mutation Mutation($userListId: ID!, $status: Int!) {
    editUserList(userListId: $userListId, status: $status) {
      id
      status
      name
      lastname
    }
  }
`;

export {
  FETCH_LIST,
  UPDATE_USER_LIST
};