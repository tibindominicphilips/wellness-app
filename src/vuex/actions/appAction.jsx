import { UPDATE_APP_DATA, UPDATE_APP_NAME, UPDATE_USER_PROFILE } from "../../common/constants"

export const updateAppName = (store, data) => {
    let action = { type: UPDATE_APP_NAME, data: data }
    store.commit(UPDATE_APP_DATA, action);
};

export const updateUserProfile = (store, data) => {
    let action = { type: UPDATE_USER_PROFILE, data: data }
    store.commit(UPDATE_APP_DATA, action);
};