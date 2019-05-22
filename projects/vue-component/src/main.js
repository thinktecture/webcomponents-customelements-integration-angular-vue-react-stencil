import './style.css';
import Vue from 'vue'
import vueCustomElement from 'vue-custom-element'
import Input from './components/Input';

Vue.use(vueCustomElement);

Vue.customElement('vue-input', Input, {
    // 'constructorCallback' can be triggered multiple times when e.g. vue-router is used
    constructorCallback() {
        window.console.info('constructorCallback', this);
    },

    // element is mounted/inserted into document
    connectedCallback() {
        window.console.info('connectedCallback', this);
    },

    // element is removed from document
    disconnectedCallback() {
        window.console.warn('disconnectedCallback', this);
    },

    // one of element's attributes (Vue instance props) is changed
    attributeChangedCallback(name, oldValue, value) {
        window.console.info('attributeChangedCallback', name, oldValue, value);
    },

    // Root component's definition is passed to this hook just before Vue instance creation - so you can modify it
    beforeCreateVueInstance(RootComponentDefinition) {
        window.console.info('beforeCreateVueInstance', RootComponentDefinition);
        return RootComponentDefinition;
    },

    // Vue instance is created
    vueInstanceCreatedCallback() {
        window.console.info('vueInstanceCreatedCallback');
    },
    shadow: false,
});
