import { createReducer } from '../utils';
import { RECEIVE_ACTIVITIES,
         ADD_TO_BUILDER,
         DELETE_FROM_BUILDER,
         CHECK_AREA } from '../constants';
import { pushState } from 'redux-router';


export default function activities(state = [], action) {
  switch (action.type) {
    case RECEIVE_ACTIVITIES:
      return action.activities
    case ADD_TO_BUILDER:
      action.activity.added = true;
      action.activity.icon = '';
      return state;
    case DELETE_FROM_BUILDER:
      action.activity.added = false;
      action.activity.icon = 'https://storage.googleapis.com/support-kms-prod/SNP_2752125_en_v0';
      return state;
    case CHECK_AREA:
      var newState = state.slice()
      newState.forEach((activity) => {
        var isVisible = false;
        for (var i = 0; i < activity.neighborhood.length; i++) {
          if (action.neighborhoods.indexOf(activity.neighborhood[i].toUpperCase()) >= 0) {
            isVisible = true;
          }
        }
        activity.visible = isVisible;
      })
      return newState;
    default:
      return state
  }
}
