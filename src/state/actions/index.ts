/* eslint-disable import/prefer-default-export */
import { TOGGLE_MODAL } from './constants';
import { ActionType } from '../types';

export const toggleModalAction = (payload: any): ActionType => {
  return {
    type: TOGGLE_MODAL,
    payload,
  };
};
