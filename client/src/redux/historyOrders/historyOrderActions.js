import axios from "axios";

export const GET_HISTORIES = "GET_HISTORIES";
export const GET_HISTORY_BY_ID = "GET_HISTORY_BY_ID";
export const CREATE_HISTORY = "CREATE_HISTORY";
export const UPDATE_HISTORY = "UPDATE_HISTORY";
export const DELETE_HISTORY = "DELETE_HISTORY";
export const GET_HISTORY_BY_USER = "GET_HISTORY_BY_USER";


// export const GET_ORDER_BY_USER = "GET_ORDER_BY_USER";


export function getHistories() {
  return async function (dispatch) {
    const {data} = await axios.get(
        `http://localhost:3001/history/getHistories`);
    await dispatch({
        type: GET_HISTORIES,
        payload: data
    });
  }
}

export function getHistoryByUser(userId) {
    return async function (dispatch) {
      const {data} = axios.get(`
          http://localhost:3001/history/getHistoryByUser/${userId}`);
      await dispatch({
          type: GET_HISTORY_BY_USER,
          payload: data
      });
    }
  }

export function getHistoryById(id) {
  return async function (dispatch) {
    const {data} = axios.get(`
        http://localhost:3001/history/getHistory/${id}`);
    await dispatch({
        type: GET_HISTORY_BY_ID,
        payload: data
    });
  }
}

// export function getOrderByUser(id) {
//   return function (dispatch) {
//     return axios
//       .get("http://localhost:3001/order/getOrderByUser/" + id)
//       .then((order) => {
//         dispatch({
//           type: GET_ORDER_BY_USER,
//           payload: order.data,
//         });
//       });
//   };
// }

export function addHistory(history) {
  return async function (dispatch) {
    const { data } = await axios.post(
        `http://localhost:3001/history/addHistory`, history);
    await dispatch({
      type: CREATE_HISTORY,
      payload: data,
    });
  };
}

export function deleteHistory(id) {
  return async function (dispatch) {
    const { data } = await axios.delete(
        `http://localhost:3001/history/deleteHistory/${id}`);
    await dispatch({
      type: DELETE_HISTORY,
      payload: data,
    });
  };
}

export function updateHistory(history, historyId) {
  return async function (dispatch) {
    const { data } = await axios.put(
        `http://localhost:3001/history/updateHistory/${historyId}`, history);
    await dispatch({
      type: UPDATE_HISTORY,
      payload: data
    });
  };
}
