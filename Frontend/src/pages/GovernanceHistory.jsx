import React from "react";
import Card from "../components/Card";

const GovernanceHistory = () => {
  const history = [
    {
      title: "Proposal: Add New Token to DEX",
      description: "Should we list the XYZ token on our decentralized exchange?",
      outcome: "Approved (75% Yes)",
    },
    {
      title: "Proposal: Adjust Treasury Spending Limits",
      description: "A proposal to modify the monthly spending limits of the DAO treasury.",
      outcome: "Rejected (45% Yes)",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Governance History</h1>
      <div className="space-y-4">
        {history.map((item, index) => (
          <Card key={index} title={item.title} description={item.description}>
            <p className="mt-2 font-semibold text-gray-700">Outcome: {item.outcome}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GovernanceHistory;
