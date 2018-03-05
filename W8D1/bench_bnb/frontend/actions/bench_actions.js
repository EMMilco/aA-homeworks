import * as BenchAPIUtil from '../util/bench_api_util';


export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

export const receiveBenches = (benches) => {
  return {
    type: RECEIVE_BENCHES,
    benches
  };
};

export const fetchBenches = () => {
  return (dispatch) => {
    return BenchAPIUtil.fetchBenches().then((payload) => {
      return dispatch(receiveBenches(payload));
    });
  };
};
