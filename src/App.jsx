import Login from "./pages/Login/Login";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import Discount from "./pages/Discount/Discount";
import Card from "./pages/Discount/Card";
import CardDetails from "./pages/admin/Dashboard/CardDetails";
import ProtectedRoute from "./protected/ProtectedRoute";
import Thankyou from "./pages/Thankyou/Thankyou";
import NotFound from "./pages/NotFound/NotFound";
import PageNotFound from "./pages/PageNotFound";
import Success from "./pages/Success";
import Spinner from "./pages/Spinner";
import FinalDiscount from "./pages/Discount/FinalDiscount"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageNotFound />} />
          <Route path="/sbs" element={<Login />} />
          <Route path="/success" element={<Success />} />
          <Route path="/spinner" element={<Spinner />} />

          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/card-details" element={<CardDetails />} />
          </Route>

          <Route path="/discount/:id" element={<Discount />} />
          <Route path="/availdiscount/:id" element={<FinalDiscount />} />
          <Route path="/card" element={<Card />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster />
    </>
  );
}

export default App;
