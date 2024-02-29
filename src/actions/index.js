//import { ConstructionOutlined } from "@mui/icons-material";
import {
  API,
  SET_USER_PERMISSIONS,
  FETCH_USER_PERMISSIONS,
  FETCH_PERSON_PROFILE,
  SET_SELECTED_USER_PROFILE,
  SET_LOGGED_IN_USER,
  FETCH_USER_SUBORDINATES,
  SET_USER_SUBORDINATES,
  FETCH_ALL_PERSONS,
  SET_ALL_PERSONS,
  FETCH_USER_DEPARTMENTS,
  SET_USER_DEPARTMENTS,
} from "./types";

export const permissionsServiceUrl =
  "https://user-permissions-api.chry.ls-dev.ru/permissions";
export const personServiceUrl = "https://person.chry.ls-dev.ru/persons";
export const catalogServiceUrl = "https://catalog.chry.ls-dev.ru/departments";

const apiErrorStub = () => {
  console.log("Ошибка при взаимодействии с API");
};

export function fetchUserSubordinates(department) {
  return apiAction({
    url: personServiceUrl,
    data: {
      departments: department,
      offset: 1,
      limit: 100,
    },
    onSuccess: setUserSubordinates,
    onFailure: apiErrorStub,
    label: FETCH_USER_SUBORDINATES,
  });
}
export function fetchAllPersons() {
  return apiAction({
    url: personServiceUrl,
    data: {
      offset: 1,
      limit: 100,
    },
    onSuccess: setAllPersons,
    onFailure: apiErrorStub,
    label: FETCH_ALL_PERSONS,
  });
}
export function fetchUserDepartments(username) {
  return apiAction({
    url: catalogServiceUrl,
    data: {
      manager: username,
    },
    onSuccess: setUserDeparments,
    onFailure: apiErrorStub,
    label: FETCH_USER_DEPARTMENTS,
  });
}

export function fetchUserPermissions() {
  return apiAction({
    url: permissionsServiceUrl,
    onSuccess: setUserPermissions,
    onFailure: apiErrorStub,
    label: FETCH_USER_PERMISSIONS,
    accessToken: localStorage.getItem("token"),
  });
}
export function fetchPersonProfile(login, expand) {
  const url = personServiceUrl + "/" + login;
  return apiAction({
    url: url,
    data: {
      expand,
    },
    onSuccess: setSelectedPersonProfile,
    onFailure: apiErrorStub,
    label: FETCH_PERSON_PROFILE,
  });
}
function setUserDeparments(data) {
  return {
    type: SET_USER_DEPARTMENTS,
    payload: data,
  };
}

function setUserPermissions(data) {
  return {
    type: SET_USER_PERMISSIONS,
    payload: data,
  };
}

function setUserSubordinates(data) {
  return {
    type: SET_USER_SUBORDINATES,
    payload: data,
  };
}

function setAllPersons(data) {
  return {
    type: SET_ALL_PERSONS,
    payload: data,
  };
}

function setSelectedPersonProfile(data) {
  return {
    type: SET_SELECTED_USER_PROFILE,
    payload: data,
  };
}
export function setLoggedInUser(username) {
  return {
    type: SET_LOGGED_IN_USER,
    payload: username,
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null,
}) {
  //const effectiveToken = accessToken ||  localStorage.getItem('token')
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride,
    },
  };
}
