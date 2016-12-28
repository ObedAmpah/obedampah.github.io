//  REDUCER (ACTION LISTENERS) FILE

const INITIAL_STATE = {
  teamData: []
};

export default function (state=INITIAL_STATE, action) {

  console.log("INSIDE THE REDUCER INITIAL", state, action);


  switch (action.type) {
    case 'CALL_TEAM_API':
      console.log("INSIDE INITIAL_DATA_CALL");
        if (action.payload !== 'undefined') {
          state.teamData = action.payload
        };
        return {...state, teamData: state.teamData};
      break;
    default:
      console.log('HIT DEFAULT');
  };

  return state;
};
