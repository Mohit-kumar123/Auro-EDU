import React, { useState } from "react";
import Card from "./Card";

const ProposalForm = ({ onProposalSubmitted }) => {
  const [proposalText, setProposalText] = useState("");

  const handleSubmit = () => {
    if (proposalText.trim()) {
      onProposalSubmitted(proposalText);
      alert(`Proposal submitted: ${proposalText}`);
      setProposalText("");
    } else {
      alert("Please enter your proposal.");
    }
  };

  return (
    <Card title="Submit a New Proposal" description="Enter the details of your proposal.">
      <div className="mb-4">
        <label htmlFor="proposalText" className="block text-gray-700 text-sm font-bold mb-2">
          Proposal Details:
        </label>
        <textarea
          id="proposalText"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={proposalText}
          onChange={(e) => setProposalText(e.target.value)}
          placeholder="Describe your proposal..."
          rows="4"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit Proposal
      </button>
    </Card>
  );
};

export default ProposalForm;
