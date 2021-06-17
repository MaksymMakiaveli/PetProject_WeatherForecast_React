import { Weather } from '../../api';

const SET_DATA = 'SET_DATA';

let initialState = {
  data: null,
};

export const weather = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export let setWeatherLocationData = (data) => ({
  type: SET_DATA,
  payload: data,
});

export const getLocationUser = (latitude, longitude) => async (dispatch) => {
  const response = await Weather.locationUserWeather(latitude, longitude);

  try {
    response && dispatch(setWeatherLocationData(response.data));
  } catch (error) {
    if (error === 429) {
      console.log(error);
    }
  }
};
