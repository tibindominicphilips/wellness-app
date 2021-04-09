
import PatientList from "../PatientList/PatientList";

export default {
    components: {
        PatientList,
    },
    methods: {
        change: (value) => {
            console.log("changed ", value);
        },
    },
    data: () => ({
        loggedInUserName: "Tibin Dominic"
    }),
};