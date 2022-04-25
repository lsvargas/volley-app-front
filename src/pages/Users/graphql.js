import { gql } from "@apollo/client";

const FETCH_USERS = gql`
  query Users {
    users {
      id
      name
      lastname
    }
  }
`;

const ADD_USER = gql`
  mutation CreateUser($name: String, $lastname: String) {
    createUser(name: $name, lastname: $lastname) {
      id
      name
      lastname
    }
  }
`;

const DELETE_USER = gql`
  mutation DeleteUser($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId) {
      id
      name
      lastname
    }
  }
`;

const updateAddUser = (cache, { data: { createUser } }) => {

  cache.updateQuery({ query: FETCH_USERS }, (data) => ({
    users: [...data.users, createUser]
  }));
};

const updateDeleteUser = (cache, { data: { deleteUser: { id } } }) => {

  cache.updateQuery({ query: FETCH_USERS }, (data) => ({
    users: data.users.filter(u => u.id !== id)
  }));
};


export {
  FETCH_USERS,
  DELETE_USER,
  ADD_USER,
  updateDeleteUser,
  updateAddUser
}