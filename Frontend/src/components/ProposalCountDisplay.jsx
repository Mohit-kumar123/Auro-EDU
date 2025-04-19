import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { votingContractAddress, votingContractABI } from '../blockchain'; // Import necessary constants

const ProposalCountDisplay = () => {
  const [proposalCount, setProposalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function waitForEthereum() {
    return new Promise((resolve) => {
      if (window.ethereum) {
        resolve(window.ethereum);
      } else {
        window.addEventListener('ethereum#initialized', () => {
          resolve(window.ethereum);
        }, { once: true });
        setTimeout(() => {
          if (!window.ethereum) {
            console.error("MetaMask not available after timeout");
            resolve(null);
          }
        }, 3000); 
      }
    });
  }

  const getVotingContract = async () => {
    const ethereum = await waitForEthereum();
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      return new ethers.Contract(votingContractAddress, votingContractABI, signer);
    }
    return null;
  };

  useEffect(() => {
    async function fetchProposalCount() {
      setLoading(true);
      setError(null);
      try {
        const votingContract = await getVotingContract();
        if (votingContract) {
          const count = await votingContract.getProposalCount();
          setProposalCount(count.toString());
        } else {
          setError('Could not connect to the Voting contract.');
        }
      } catch (err) {
        console.error('Error fetching proposal count:', err);
        setError('Failed to fetch proposal count.');
      } finally {
        setLoading(false);
      }
    }

    fetchProposalCount();
  }, []);

  if (loading) {
    return <p>Loading proposal count...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <p>Total Proposals: {proposalCount}</p>
    </div>
  );
};

export default ProposalCountDisplay;