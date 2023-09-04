import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import Login from "./pages/Login";
import MyPlan from "./pages/MyPlan";
import NewPlan from "./pages/NewPlan";
import PlanDetail from "./pages/PlanDetail";
import { PublicDataApiProvider } from "./context/PublicDataApiContext";
import { TransportationApiProvider } from "./context/TransportationApiContext";

function App() {
  return (
    <PublicDataApiProvider>
      <TransportationApiProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Main />} />
            <Route path="/plans/new" element={<NewPlan />} />
            <Route path="/login" element={<Login />} />
            <Route path="/plans" element={<MyPlan />} />
            <Route path="/plans/detail" element={<PlanDetail />} />
          </Route>
        </Routes>
      </TransportationApiProvider>
    </PublicDataApiProvider>
  );
}

export default App;
