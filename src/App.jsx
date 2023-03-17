import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Table from "./Components/Table/Table";
import NewASN from "./Routes/NewASN/NewASN";
import Reports from "./Routes/Reports/Reports";
const data = require("./data.json");

// landing page: My POs, Create ASN, Reports
// My POs: Dashboard, approve all POs
// Reports: Some charts, graphs, etc.
// Create ASN: Excel upload

const columns = [
  "Client",
  "PO Number",
  "Company Code",
  "bstyp",
  "Document Type",
  "Control Indicator",
  "Status",
  "Creation Date",
  "Created By",
];

function App() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="header">
          <Link to={"/pos"}>Supplier</Link>
        </h1>
        <ul className="nav-links">
          <Link to={"/pos"}>
            <li className="nav-link">My POs</li>
          </Link>
          <Link to={"/new-asn"}>
            <li className="nav-link">Create New ASN</li>
          </Link>
          <Link to={"/reports"}>
            <li className="nav-link">Reports</li>
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/pos" element={<Table rows={data} columns={columns} />} />
        <Route
          path="/new-asn"
          element={
            <>
              <NewASN />
            </>
          }
        />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
}

export default App;
