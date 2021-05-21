import { UPDATE_APP_NAME, UPDATE_USER_PROFILE } from "../../common/constants";

export const UPDATE_APP_DATA = (state, action) => {
    switch (action.type) {
        case UPDATE_APP_NAME:
            state.appData = { ...state.appData, appName: action.data }
            break;
        case UPDATE_USER_PROFILE:
            state.appData = { ...state.appData, userProfile: action.data }
            break;
    }
};
