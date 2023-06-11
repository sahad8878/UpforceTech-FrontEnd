import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from './Components/Header/Header'
import "./App.css";
import AddUserForm from "./Pages/AddUserForm/AddUserForm";
import EditUser from "./Pages/EditUser/EditUser";
import ViewUserDetails from "./Pages/ViewUserDetails/ViewUserDetails";

function App() {
  return (
    <BrowserRouter>
   <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<AddUserForm />} />
        <Route path="/edit-user/:userId" element={<EditUser/>} />
        <Route path="/view-userDetails/:userId" element={<ViewUserDetails/>} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
