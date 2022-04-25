import { gql } from "@apollo/client";

const FETCH_ALL_USERS = gql`
  query Query {
    users {
      id
      name
      lastname
    }
  }
`;

const FETCH_TEMPLATE_LIST = gql`
  query TemplateList($templateListId: ID!) {
    templateList(id: $templateListId) {
      id
      name
      users {
        id
        userId
        name
        lastname
      }
    }
  }
`;

const DELETE_PLAYER_FROM_LIST = gql`
  mutation DeleteUserTemplateList($templateListId: ID!, $userId: ID!) {
    deleteUserTemplateList(templateListId: $templateListId, userId: $userId) {
      id
      userId
      name
      lastname
    }
  }
`;

const ADD_PLAYER_TO_LIST = gql`
  mutation CreateUserTemplateList($templateListId: ID!, $userId: ID!) {
    createUserTemplateList(templateListId: $templateListId, userId: $userId) {
      id
      userId
      name
      lastname
    }
  }
`;

const updateDeletePlayerFromList = (cache, { data: { deleteUserTemplateList } }, id) => {
  const { userId } = deleteUserTemplateList;

  cache.updateQuery({ query: FETCH_TEMPLATE_LIST, variables: { templateListId: id } }, (data) => ({
    templateList: {
      ...data.templateList,
      users: data.templateList.users.filter((u) => u.userId !== userId)
    }
  }));
};

const updateAddPlayerToList = (cache, { data: { createUserTemplateList } }, id) => {

  cache.updateQuery({ query: FETCH_TEMPLATE_LIST, variables: { templateListId: id } }, (data) => ({
    templateList: {
      ...data.templateList,
      users: [...data.templateList.users, createUserTemplateList]
    }
  }));
};


export {
  FETCH_TEMPLATE_LIST,
  DELETE_PLAYER_FROM_LIST,
  updateDeletePlayerFromList,
  updateAddPlayerToList,
  FETCH_ALL_USERS,
  ADD_PLAYER_TO_LIST
};
