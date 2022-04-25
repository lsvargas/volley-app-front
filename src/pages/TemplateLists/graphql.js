import { gql } from "@apollo/client";

const FETCH_TEMPLATE_LISTS = gql`
  query TemplateLists {
    templateLists {
      id
      name
    }
  }
`;

const ADD_TEMPLATE_LIST = gql`
  mutation CreateTemplateList($name: String!) {
    createTemplateList(name: $name) {
      id
      name
    }
  }
`;

const DELETE_TEMPLATE_LIST = gql`
  mutation DeleteTemplateList($deleteTemplateListId: ID!) {
    deleteTemplateList(id: $deleteTemplateListId) {
      id
      name
    }
  }
`;

const updateAddTemplateList = (cache, { data: { createTemplateList } }) => {

  cache.updateQuery({ query: FETCH_TEMPLATE_LISTS }, (data) => ({
    templateLists: [...data.templateLists, createTemplateList]
  }));
};

const updateDeleteTemplateList = (cache, { data: { deleteTemplateList: { id } } }) => {

  cache.updateQuery({ query: FETCH_TEMPLATE_LISTS }, (data) => ({
    templateLists: data.templateLists.filter(l => l.id !== id)
  }));
};


export {
  FETCH_TEMPLATE_LISTS,
  ADD_TEMPLATE_LIST,
  DELETE_TEMPLATE_LIST,
  updateDeleteTemplateList,
  updateAddTemplateList
};

