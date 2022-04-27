import { gql } from "@apollo/client";

const REGISTER_USER = gql`
  mutation Mutation($name: String, $email: String, $password: String) {
    registerUser(name: $name, email: $email, password: $password) {
      id
      email
      name
      token
      lastname
    }
  }
`;


export {
  REGISTER_USER
};
