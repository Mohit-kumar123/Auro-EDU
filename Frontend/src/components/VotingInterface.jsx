import React, { useState } from "react";
import Card from "./Card";

const VotingInterface = ({ proposals, onVoteSubmitted }) => {
  const [selectedProposalId, setSelectedProposalId] = useState("");
  const [vote, setVote] = useState("");

  const handleVote = () => {
    if (selectedProposalId && vote) {
      onVoteSubmitted({ proposalId: selectedProposalId, vote });
      setSelectedProposalId("");
      setVote("");
      alert(
        `You voted "${vote}" on proposal "${
          proposals.find((p) => p.id === selectedProposalId)?.title
        }"`
      );
    } else {
      alert("Please select a proposal and a vote option.");
    }
  };

  return (
    <Card title="Cast Your Vote" description="Select a proposal and cast your vote.">
      <div className="mb-4">
        <label htmlFor="proposal" className="block text-gray-700 text-sm font-bold mb-2">
          Select Proposal:
        </label>
        <select
          id="proposal"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={selectedProposalId}
          onChange={(e) => setSelectedProposalId(e.target.value)}
        >
          <option value="">-- Select a Proposal --</option>
          {proposals.map((proposal) => (
            <option key={proposal.id} value={proposal.id}>
              {proposal.title}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Your Vote:</label>
        <div className="flex space-x-4">
          <label>
            <input
              type="radio"
              className="mr-2"
              name="vote"
              value="yes"
              checked={vote === "yes"}
              onChange={(e) => setVote(e.target.value)}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              className="mr-2"
              name="vote"
              value="no"
              checked={vote === "no"}
              onChange={(e) => setVote(e.target.value)}
            />
            No
          </label>
        </div>
      </div>
      <button
        onClick={handleVote}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit Vote
      </button>
    </Card>
  );
};

export default VotingInterface;
