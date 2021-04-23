const DirectivesExercise = {
    data() {
        return {
            calValues: [0, 0, 0],
            options: [
                {value: 'test1', message: 'message1'},
                {value: 'test2', message: 'message2'},
                {value: 'test3', message: 'message3'},
                {value: 'test4', message: 'message4'},
            ],
            message: '',
        }
    },
    methods: {
        handleChange(event) {
            this.message = this.options.find(o => o.value === event.target.value).message;
        },
    }
};

Vue.createApp(DirectivesExercise).mount('#directivesexercise');