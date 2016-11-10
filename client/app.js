'use strict';
Vue.http.options.emulateJSON = true;
new Vue({

    // We want to target the div with an id of 'events'
    el: '#generator',

    // Here we can register any values or collections that hold data
    // for the application
    data: {
        generator: {
            targetUrl : '',
            name : '',
            width: 1280,
            height: 800,
            platform: 'darwin',
            arch: 'x64',
            asar: false,
            ignoreCertificate: false,
            insecure: false,
            showMenuBar: false,
            honest: false,
            fastQuit: true,
            zoom: 1.0
        }
    },

    // Anything within the ready function will run when the application loads
    ready: function() {},

    // Methods we want to use in our application are registered here
    methods: {
        submit: function() {
            if(this.generator.targetUrl) {
                //http post
                var test = this.generator;
                this.$http.post('/api/nativefier', test).then(function(response) {
                    alert(response.body.success);
                }, function(error) {
                    console.log(error.body.error);
                });
            }
        }
    }
});