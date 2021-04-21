const VModel = {
    data: () => ({
        message: "",
        checkedNames: [],
        options: [
            {value: 'Arthur'},
            {value: 'Aurel'},
            {value: 'Francis'},
            {value: 'Bob'},
        ],
    }),
};

Vue.createApp(VModel).mount('#vmodel');