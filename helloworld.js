const HelloWorld = {
    data: () => ({
        message: 'Hello world',
    }),
};

Vue.createApp(HelloWorld).mount('#helloworld');