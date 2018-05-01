import {ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE} from './../action/type/type'
import shortid from 'shortid'
import findIndex from 'lodash/findIndex'

export default (state = [], action = {}) => {
  console.log("state",state);
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text
        }
      ];
    case DELETE_FLASH_MESSAGE:
      const index = findIndex(state, { id: action.id });
      if (index >= 0) {
        return [
        ...state.slice(index, 0),
        ...state.slice(index + 1)
        ]
      }
      return state;
    default:
      return state;
  }
}
