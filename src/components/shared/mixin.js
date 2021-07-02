export default {
    methods: {
    },
    data: function () {
        return {
            inputRulesp: [
                (v) => !!v || "Password is required",
                (v) =>
                    (v && v.length >= 3) || "Password must be greater than 3 characters",
            ],
        };
    },
    created: function () {
        console.log("Mixin created");
    },
};