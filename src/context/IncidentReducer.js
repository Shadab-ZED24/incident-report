const IncidentReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_INCIDENT':
        return {
          ...state,
          incidents: [...state.incidents, action.payload],
        };
      case 'UPDATE_INCIDENT':
        return {
          ...state,
          incidents: state.incidents.map((incident) =>
            incident.id === action.payload.id ? action.payload : incident
          ),
        };
      default:
        return state;
    }
  };
  
  export default IncidentReducer;
  