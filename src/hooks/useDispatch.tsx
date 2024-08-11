import { useDispatch as useReduxDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../redux/store';

type AppDispatch = ThunkDispatch<RootState, unknown, Action<string>>;

export const useDispatch = () => useReduxDispatch<AppDispatch>();