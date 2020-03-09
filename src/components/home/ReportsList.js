import React from "react";
import { Link } from "react-router-dom";

const ReportsList = props => {
  return (
    <nav className="reports-link-container">
      <Link to="/reports/incomplete-orders">Incomplete Orders</Link>
    </nav>
  );
};

export default ReportsList;
