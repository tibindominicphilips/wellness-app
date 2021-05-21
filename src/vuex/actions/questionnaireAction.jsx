import { UPDATE_QUESTIONNARE } from "../../common/constants";

const updateQuestionnaire = (store, data) => {
    store.commit(UPDATE_QUESTIONNARE, data);
};

export default updateQuestionnaire