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
  mutation CreateList($templateListId: ID!, $date: String) {
    createList(templateListId: $templateListId, date: $date) {
      name
      id
    }
  }
`;

export {
  FETCH_TEMPLATE_LISTS,
  CREATE_LIST
};
