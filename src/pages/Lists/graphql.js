import { gql } from "@apollo/client";

const FETCH_LISTS = gql`
  query Lists {
    lists {
      id
      name
      date
    }
  }
`;

const DELETE_LIST = gql`
  mutation Mutation($deleteListId: ID!) {
    deleteList(id: $deleteListId) {
      id
      name
    }
  }
`;

const updateDeleteList = (cache, { data: { deleteList: { id } } }) => {
  cache.updateQuery({ query: FETCH_LISTS }, (data) => ({
    lists: data.lists.filter(l => l.id !== id)
  }));
};


export {
  FETCH_LISTS,
  DELETE_LIST,
  updateDeleteList
};

