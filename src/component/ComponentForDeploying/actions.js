import axios from "axios";
import url from "./url";
const readAction = (records) => {
  return {
    type: "FETCH",
    value: records,
  };
};

export const getProducts = () => {
  return (dispatch) => {
    return axios.get(url + "/fetch").then(
      (posRes) => {
        dispatch(readAction(posRes.data));
      },
      (errRes) => {
        console.log(errRes);
      }
    );
  };
};

const insertAction = (result) => {
  return {
    type: "INSERT",
    value: result,
  };
};

export const insertProduct = (record) => {
  return (dispatch) => {
    return axios.post(url + "/insert", record).then(
      (posRes) => {
        dispatch(insertAction(posRes.data));
      },
      (errRes) => {
        console.log(errRes);
      }
    );
  };
};

const updateAction = (result) => {
  return {
    type: "UPDATE",
    value: result,
  };
};

export const updateProduct = (record) => {
  return (dispatch) => {
    console.log(record);
    return axios.post(url + "/update", record).then(
      (posRes) => {
        dispatch(updateAction(posRes.data));
      },
      (errRes) => {
        console.log(errRes);
      }
    );
  };
};

const deleteAction = (result) => {
  return {
    type: "DELETE",
    value: result,
  };
};

export const deleteProduct = (record) => {
  return (dispatch) => {
    return axios.post(url + "/delete", record).then(
      (posRes) => {
        dispatch(deleteAction(posRes.data));
      },
      (errRes) => {
        console.log(errRes);
      }
    );
  };
};
