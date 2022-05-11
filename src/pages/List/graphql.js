import { gql } from "@apollo/client";

const FETCH_LIST = gql`
  query List($listId: ID!) {
    list(id: $listId) {
      id
      name
      date
      closed
      users {
        id
        userId
        status
        name
        lastname
        waitingList
      }
    }
  }
`;

const FETCH_ALL_USERS = gql`
  query Query {
    users {
      id
      name
      lastname
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

const ADD_PLAYER_TO_LIST = gql`
  mutation CreateUserList($listId: ID!, $userId: ID!, $waitingList: Boolean) {
    createUserList(listId: $listId, userId: $userId, waitingList: $waitingList) {
      id
      userId
      status
      name
      lastname
      waitingList
    }
  }
`;


const UPDATE_LIST = gql`
  mutation Mutation($updateListId: ID!, $closed: Boolean) {
    updateList(id: $updateListId, closed: $closed) {
      id
      name
      date
      closed
      users {
        id
        userId
        status
        name
        lastname
        waitingList
      }
    }
  }
`;

const updateAddPlayerToList = (cache, { data: { createUserList } }, id) => {
  cache.updateQuery({ query: FETCH_LIST, variables: { listId: id } }, (data) => ({
    list: {
      ...data.list,
      users: [...data.list.users, createUserList]
    }
  }));
};

export {
  FETCH_LIST,
  UPDATE_USER_LIST,
  FETCH_ALL_USERS,
  updateAddPlayerToList,
  ADD_PLAYER_TO_LIST,
  UPDATE_LIST
};