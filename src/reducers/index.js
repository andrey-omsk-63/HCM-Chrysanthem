import {
  API_START,
  API_END,
  SET_USER_PERMISSIONS,
  SET_SELECTED_USER_PROFILE,
  SET_LOGGED_IN_USER,
  SET_USER_SUBORDINATES,
  SET_ALL_PERSONS,
  SET_USER_DEPARTMENTS
} from "../actions/types";

const reducers = function (state = {}, action) {
  switch (action.type) {
    case SET_USER_SUBORDINATES:
      return {
        ...state,
        userSubordinates: action.payload.data
      };
    case SET_ALL_PERSONS:
      return {
        ...state,
        allPersons: action.payload.data
      };
    case SET_USER_DEPARTMENTS:
      return {
        ...state,
        userDepartments: action.payload.length?action.payload[0].data:undefined
      };
    case SET_USER_PERMISSIONS:
      return {
        ...state,
        loggedInUserPermissions: action.payload
      };
    case SET_SELECTED_USER_PROFILE:
      return {
        ...state,
        selectedUserProfile: action.payload[0]
      };
    case SET_LOGGED_IN_USER:
      return {
        ...state,
        loggedInUser: action.payload
      };
    case API_START:
      return {
        ...state,
        isLoadingData: true
      };
    case API_END:
      return {
        ...state,
        isLoadingData: false
      };
    default:
      return state;
  }
}

export default reducers