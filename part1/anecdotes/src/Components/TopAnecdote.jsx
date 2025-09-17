import React from 'react';

const TopAnecdote = ({ anecdotes, votes }) => {
      const highestVoteCount = Math.max(...votes);
      if (highestVoteCount === 0) {
            return (
                  <div>
                        <h1>Anecdote with most votes</h1>
                        <p>No votes yet.</p>
                  </div>
            );
      }

      const highestVotedAnecdoteIndex = votes.indexOf(highestVoteCount);
      const highestVotedAnecdote = anecdotes[highestVotedAnecdoteIndex];

      return (
            <div>
                  <h1>Anecdote with most votes</h1>
                  <p>{highestVotedAnecdote} has <b>{highestVoteCount} Votes</b> </p>
            </div>
      );
};

export default TopAnecdote;