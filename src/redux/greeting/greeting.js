const GET_GREETING = '/hello-react-front-end/greeting/GET_GREETING';

const greetingAction = (greeting) => ({
  type: GET_GREETING,
  payload: {
    greeting,
  },
});

export const getGreeting = () => (dispatch) => {
  fetch('http://127.0.0.1:3000/messages', {
    method: 'GET',
    cors: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(greetingAction(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const greetingReducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload.greeting;
    default:
      return state;
  }
};

export default greetingReducer;
export { greetingAction };
