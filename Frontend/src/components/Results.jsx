import React from "react";
import Card from "./Card";

const Results = ({ results }) => {
  return (
    <Card title="Current Voting Results" description="See the live results for ongoing proposals.">
      {results.length === 0 ? (
        <p className="text-gray-500">No votes have been cast yet.</p>
      ) : (
        <ul>
          {results.map((result, index) => (
            <li key={index} className="py-2 border-b last:border-b-0 flex justify-between items-center">
              <span>{result.proposal}</span>
              <div className="flex space-x-4 text-sm text-gray-700">
                <span>Yes: {result.votesYes}</span>
                <span>No: {result.votesNo}</span>
                <span>
                  Total: {result.votesYes + result.votesNo} (
                  {result.votesYes + result.votesNo > 0
                    ? Math.round((result.votesYes / (result.votesYes + result.votesNo)) * 100)
                    : 0}
                  % Yes)
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Results;
