import { gql } from "@apollo/client";

const FETCH_TEMPLATE_LISTS = gql`
  query TemplateLists {
    templateLists {
      id
      name
    }
  }
`;

const CREATE_LIST = gql`
  mutation CreateList($templateListId: ID!) {
    createList(templateListId: $templateListId) {
      name
      id
    }
  }
`;

const updateCreateList = (cache, { data: { createUser } }) => {

  // cache.updateQuery({ query: FETCH_LIST }, (data) => ({
  //   users: [...data.users, createUser]
  // }));
};

export {
  FETCH_TEMPLATE_LISTS,
  CREATE_LIST,
  updateCreateList
};
