import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { ExcelDown, Login, Schedule } from "../pages";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/excelDown" element={<Layout />}>
          <Route index element={<ExcelDown />} />
        </Route>
        <Route path="/schedule" element={<Layout />}>
          <Route index element={<Schedule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
