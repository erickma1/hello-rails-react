import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetingsSlice';

function Greeting() {
  const dispatch = useDispatch();
  const { greeting, isLoading, error } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreeting());
  },
  [dispatch]);

  const handleClick = () => {
    dispatch(fetchGreeting());
  };

  if (isLoading) {
    return (
      <>
        <div className="loading">...isLoading</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="loading">
          error...
        </div>
      </>
    );
  }

  return (
    <>
      <h1>{greeting}</h1>
      <button type="button" onClick={handleClick}>new greeting</button>
    </>
  );
}

export default Greeting;