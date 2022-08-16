import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from '../redux/greeting/greeting';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <div>
      {/* <h1>{greeting}</h1> */}
    </div>
  );
};

// Greeting.propTypes = {
//   greeting: PropTypes.string.isRequired,
// };

export default Greeting;
