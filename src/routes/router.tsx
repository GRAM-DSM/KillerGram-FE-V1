import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { ExcelDown } from "../pages/excelDownload";
import { Layout } from "./layout";
import { Schedule } from "../pages/schedule";

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
