import $ from 'jquery';
import { combineReducers } from 'redux';
import data from './data/Data';
import {
  RECEIVE_APP_ITEM
} from 'babel/constants/actionsTypes/Arcgis';
import {
  UPDATE_ITEM_APP_ITEM,
  UPDATE_ITEM_APP_ITEM_TITLE
} from 'babel/constants/actionsTypes/Items';
import {
  UPDATE_LAYOUT_ID
} from 'babel/constants/actionsTypes/Settings';

const defaultItem = {
  extent: '-125,-40,70,70',
  ownerFolder: false,
  title: '',
  tags: ['Story Map,Story Maps,Crowdsource'],
  type: 'Web Mapping Application',
  typeKeywords: ['Story Map','Story Maps','Crowdsource','StoryMap-Crowdsource','layout-stacked','JavaScript','Map','Mapping Site','Online Map','Ready To Use','selfConfigured','Web Map']
};

export const item = function (state = defaultItem, action) {
  switch (action.type) {
    case UPDATE_ITEM_APP_ITEM:
      return $.extend(true,{},state,action.parameters);
    case UPDATE_ITEM_APP_ITEM_TITLE:
      return $.extend(true,{},state,{title: action.title});
    case UPDATE_LAYOUT_ID:
      let index = state.typeKeywords.length;

      state.typeKeywords.forEach((current,i) => {
        if (current.id.match('layout-')) {
          index = i;
        }
      });

      const typeKeywords = [
        ...state.typeKeywords.slice(0, index),
        $.extend(true,{},state.typeKeywords[index],'layout-' + action.id),
        ...state.typeKeywords.slice(index + 1)
      ];

      return $.extend(true,{},state,{typeKeywords});
    default:
      return state;
  }
};

export const appCombined = combineReducers({
  data,
  item
});

export const app = function(state = {}, action) {
  switch (action.type) {
    case RECEIVE_APP_ITEM:
      return $.extend(true,{},state,action.response);
    default:
      return appCombined(state, action);
  }
};

export default app;