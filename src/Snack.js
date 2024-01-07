import React from 'react';
import { Link } from 'react-router-dom';

const Snack1 = () => {
  return (
    <div>
      <h2>Snack 1</h2>
      <Link to="/">Go Back</Link>
    </div>
  );
};

const Snack2 = () => {
  return (
    <div>
      <h2>Snack 2</h2>
      <Link to="/">Go Back</Link>
    </div>
  );
};

const Snack3 = () => {
  return (
    <div>
      <h2>Snack 3</h2>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export { Snack1, Snack2, Snack3 };

