import React from 'react';
import { produce } from 'immer';

export const settingsInitialState: SettingsStateType = { landingDistanceUnit: 'meters' };

export enum SettingsActions {
    SET_LANDING_DISTANCE_UNIT,
}

export type SettingsStateType = {
    landingDistanceUnit: 'meters' | 'feet'
}

export type SettingsContextType = {
    dispatchState: SettingsStateType;
    dispatchDispatch: React.Dispatch<any>;
}

const Reducer = (state, action) => {
    switch (action.type) {
    case SettingsActions.SET_LANDING_DISTANCE_UNIT: {
        return produce(state, (draft) => {
            draft.landingDistanceUnit = action.payload.landingDistanceUnit;
        });
    }

    default: {
        throw new Error('No valid action provided');
    }
    }
};

// Curried
export const SettingsReducer = produce(Reducer);
