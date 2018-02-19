//action types
export const REQ_STARTED = 'REQ_STARTED';
export const REQ_SUCCEED = 'REQ_SUCCEED';
export const REQ_FAILED = 'REQ_FAILED';

//actions
export const getExchangeRates = () => (dispatch, getState) => {
  if (shouldFetch(getState())) {
    dispatch({
      type: REQ_STARTED
    });

    let resData = [];
    let latest, currencies;
    return fetch('http://forex.cbm.gov.mm/api/latest')
      .then(res => {
        return res.json();
      })
      .then(resData => {
        latest = resData;
        return fetch('http://forex.cbm.gov.mm/api/currencies');
      })
      .then(res => {
        return res.json();
      })
      .then(resData => {
        currencies = resData.currencies;
        return true;
      })
      .then(data => {
        Object.keys(latest.rates).forEach((key, i) => {
          resData.push({
            id: ++i,
            country: currencies[key],
            currency: key,
            value: key == 'JPY' ? 100 : 1,
            rate: latest.rates[key],
            countryCode: key.slice(0, 2)
          });
        });
        dispatch({
          type: REQ_SUCCEED,
          exchangeRates: resData
        });
      })
      .catch(err => {
        dispatch({
          type: REQ_SUCCEED,
          exchangeRates: []
        });
      });
  }
};

const shouldFetch = prevState => {
  const {isFetching} = prevState;
  if (isFetching) {
    return false;
  } else {
    return true;
  }
};

