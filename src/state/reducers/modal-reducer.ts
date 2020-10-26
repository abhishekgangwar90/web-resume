/* eslint-disable import/prefer-default-export */
import { TOGGLE_MODAL } from '../actions/constants';
import { ActionType } from '../types';

type ModalState = {
  open: boolean;
  container: any;
  size: string;
};

const initialState: ModalState = {
  open: false,
  container: null,
  size: 'xl',
};

/**
 * Modal Reducer
 * @param state
 * @param action
 */
export const modalReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
      return {
        ...state,
        open: action.payload.open || !state.open,
        container: action.payload.container || null,
        size: action.payload.size,
      };
    }

    default: {
      return state;
    }
  }
};
