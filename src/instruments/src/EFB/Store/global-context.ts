import React, { Context, createContext } from 'react';
import { performanceInitialState, PerformanceStateType } from './performance-reducer';
import { dispatchInitialState, DispatchStateType } from './dispatch-reducer';
import { settingsInitialState, SettingsStateType } from './settings-reducer';

export type GlobalContextType = {
    performanceState: PerformanceStateType;
    performanceDispatch: React.Dispatch<any>;
    dispatchState: DispatchStateType;
    dispatchDispatch: React.Dispatch<any>;
    settingsState: SettingsStateType;
    settingsDispatch: React.Dispatch<any>;
}

const defaultValue = {
    performanceState: performanceInitialState,
    performanceDispatch: () => {},
    dispatchState: dispatchInitialState,
    dispatchDispatch: () => {},
    settingsState: settingsInitialState,
    settingsDispatch: () => {},
};

export const GlobalContext:Context<GlobalContextType> = createContext<GlobalContextType>(defaultValue);
