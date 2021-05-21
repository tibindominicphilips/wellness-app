import { UPDATE_QUESTIONNARE } from "../../common/constants";

export const updateQuestionnaire = (store, data) => {
    store.commit(UPDATE_QUESTIONNARE, data);
};
