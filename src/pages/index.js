import Layout from "../components/layout";
import React from "react";
import StatusDisplay from "../components/status_tracker_feature/statusDisplay";

function IndexPage() {
  return (
    <Layout>
      <StatusDisplay />
    </Layout>
  );
}

export default IndexPage;
