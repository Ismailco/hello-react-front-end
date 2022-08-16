const GET_GREETING = '/hello-react-front-end/greeting/GET_GREETING';

const greetingAction = (greeting) => ({
  type: GET_GREETING,
  payload: {
    greeting,
  },
});

const getGreeting = () => (dispatch) => {
  fetch('http://127.0.0.1:3001/messages')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(greetingAction(data.text));
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
export { greetingAction, getGreeting };
