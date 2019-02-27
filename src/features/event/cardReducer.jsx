import { createReducer } from '../../app/common/util/reducerUtil';
import { CREATE_CARD, DELETE_EVENT, UPDATE_EVENT, FETCH_EVENTS } from './cardConstants';

 const initialState = [];

export const createCard = (state, payload) => {
  return [...state, Object.assign({}, payload.card)]
}

export const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    Object.assign({}, payload.event)
  ]
}

export const deleteEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.eventId)
  ]
}

export const fetchEvents = (state, payload) => {
  return payload.events
}

export default createReducer(initialState, {
  [CREATE_CARD]: createCard,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent,
  [FETCH_EVENTS]: fetchEvents
})