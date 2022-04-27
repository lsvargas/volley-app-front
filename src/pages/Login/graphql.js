import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation Mutation($password: String, $email: String) {
    loginUser(password: $password, email: $email) {
      id
      email
      name
      lastname
      token
    }
  }
`;


export {
  LOGIN_USER
};
