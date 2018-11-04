import * as actionTypes from '../actionTypes';

export const aumentarContador = index => (dispatch, getState) => {
  dispatch({
    type: actionTypes.AUMENTAR,
    selected: index,
  });
};

export const disminuirContador = index => (dispatch, getState) => {
  dispatch({
    type: actionTypes.DISMINUIR,
    selected: index,
  });
};

export const agregarContador = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.AGREGAR_CONTADOR,
  });
};

export const removerContador = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVER_CONTADOR,
  });
};
