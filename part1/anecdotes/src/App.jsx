import { useState } from 'react';
import NextAnecdoteButton from './Components/NextAnecdoteButton.jsx';
import VoteButton from './Components/VoteButton.jsx';
import TopAnecdote from './Components/TopAnecdote.jsx';
import anecdotes from './Anecdotes.js';

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const generateRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <div>
      <h1>Anecdote of the day:</h1>
      <p>{anecdotes[selected]}</p>
      <VoteButton votesForAnecdote={votes[selected]} onVote={handleVote} />
      <NextAnecdoteButton text={'next anecdote'} handleClick={generateRandomAnecdote} />
      <TopAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;