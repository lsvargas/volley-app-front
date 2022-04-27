import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Menu from './components/Menu';


import {
  TemplateLists,
  TemplateList,
  Users,
  Home,
  List,
  Lists,
  Register,
  Login
}  from './pages';

function App() {
  return (
    <Layout>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists/:id" element={<List />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/template_lists" element={<TemplateLists />} />
        <Route path="/template_lists/:id" element={<TemplateList />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>
  );
}

export default App;
