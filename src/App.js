import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

import Layout from './components/Layout';
import Menu from './components/Menu';

import {
  TemplateLists,
  TemplateList,
  Users,
  Home,
  List,
  Lists
}  from './pages';


const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

function App() {
  return (
    <Layout>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lists/:id" element={<List />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/template_lists" element={<TemplateLists />} />
            <Route path="/template_lists/:id" element={<TemplateList />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </Layout>
  );
}

export default App;
