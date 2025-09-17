import React from 'react';

const VoteButton = ({ onVote, votesForAnecdote }) => {
      return (
            <>
                  <p>Votes: {votesForAnecdote}</p>
                  <button onClick={onVote}>Vote</button>
            </>
      );
};

export default VoteButton;