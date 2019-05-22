<style scoped>

    .input {
        position: relative;
    }

    .input label {
        display: block;
        position: absolute;
        transform: translateY(-50%) scale(.5);
        transform-origin: left top;
    }

    .input input {
        background: transparent;
        border: transparent;
        font-size: inherit;
        color: inherit;
        outline: none;
        width: 100%;
    }

    .input .line {
        position: relative;
        display: block;
        background: #ff584f;
        height: 1px;
        width: 100%;
        margin-top: 2px;
    }

    .input i {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 0;
        display: block;
        top: 0;
        color: #ff584f;
    }

</style>

<template>
    <div class="input">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
              integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

        <label>{{placeholder}}</label>
        <input type="text" v-on:keyup="inputChange">
        <div class="line"></div>
        <i class="fas" v-bind:class="{'fa-check': isValid, 'fa-times': !isValid}"></i>
    </div>
</template>

<script>
    export default {
        name: 'Input',
        data: () => ({
            isValid: false,
        }),
        props: {
            placeholder: String,
            validator: Object,
        },
        methods: {
            inputChange: function (event) {
                if (this.validator) {
                    const value = event.target.value;
                    this.isValid = this.validator.validate(value);
                    if (this.isValid) {
                        this.$emit('inputChange', `${value}, Date.now: ${Date.now()}`);
                    }
                }

            },
        },
    }
</script>
