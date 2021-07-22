var obj = new Vue({
    el: '#VueApp',
    created() {

    },
    data: {
        message: 'Hello Vue!',
        email: '',
        username: '',
        password: '',
        passwordVerify: '',

    },
    methods: {
        loginVerify: function() {
            if (obj.username == 'admin' && obj.password == '1234') {
                alert("You successfully logged in. Remember to never use this credential for sensitive data!");
            } else {
                alert("You failed the test!");
            }
        },

        singupVerify: function() {
            alert("You are all signed up!");
        },

        check: function($event) {
            // console.log(parseInt($event.key));
            if (obj.password == obj.passwordVerify + $event.key) {
                document.getElementById('passwordVerify').style.border = '2px solid green';
            } else {
                document.getElementById('passwordVerify').style.border = '2px solid red';
            }
        }
    }
})

function clone(obj) {

}

function check() {
    try {

    } catch (err) {

    }

}