import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPages from "./pages/layout";
import Home from "./pages/home/page";
import TermaAndConditions from "./pages/Terms&Conditions/page";
import LayoutAuth from "./pages/auth/layout";
import SignIn from "./pages/auth/signIn";
import SignUp from "./pages/auth/signUp";
import AboutUs from "./pages/aboutUs/page";
import PrivacyPolicy from "./pages/privacyPolicy/page";
import FAQ from "./pages/faq/page";
import ContactUs from "./pages/contactUs/page";
import BlogDetails from "./pages/blog/blog";
import PropertyDetails from "./pages/property/property";
import Destinations from "./pages/property/page";
import ListYourProperty from "./pages/listYourProperty/page";
import NotFound from "./pages/404_Page/404Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<LayoutPages/>} path="/*">
            <Route path="" element={<Home/>} />
            <Route path="terms&conditions" element={<TermaAndConditions/>} />
            <Route path="aboutUs" element={<AboutUs/>} />
            <Route path="privacyPolicy" element={<PrivacyPolicy/>} />
            <Route path="FAQs" element={<FAQ/>} />
            <Route path="contactUs" element={<ContactUs/>} />
            <Route path="blog/:id" element={<BlogDetails/>} />
            <Route path="property/:id" element={<PropertyDetails/>} />
            <Route path="destinations" element={<Destinations/>} />
            <Route path="listYourProperty" element={<ListYourProperty/>} />
            <Route element={<LayoutAuth/>} path="auth/*">
               <Route element={<SignIn/>} path="signIn"/>
               <Route element={<SignUp/>} path="signUp"/>
            </Route>
            <Route path="*" element={<NotFound/>} />
          </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
