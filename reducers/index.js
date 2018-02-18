import {REQ_STARTED, REQ_SUCCEED, REQ_FAILED} from '../actions';

export default (
  state = {header: 'FOREXMM', exchangeRates: [], isFetching: false},
  action
) => {
  switch (action.type) {
    case REQ_STARTED:
      return {
        ...state,
        isFetching: true
      };
    case REQ_SUCCEED:
      return {
        ...state,
        isFetching: false,
        exchangeRates: action.exchangeRates
      };
    case REQ_FAILED:
      return {
        ...state,
        isFetching: false
      };
    default:
      return {
        ...state
      };
  }
};
