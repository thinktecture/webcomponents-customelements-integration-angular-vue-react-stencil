class InputComponent extends HTMLElement {
    _validator;

    constructor() {
        super();
        this.labelEl = document.createElement('label');
        this.appendChild(this.labelEl);
        this.inputEl = document.createElement('input');
        this.appendChild(this.inputEl);
        this.line = document.createElement('div');
        this.line.classList.add('line');
        this.appendChild(this.line);
        this.icon = document.createElement('i');
        this.appendChild(this.icon);
        this.inputEl.addEventListener('keyup', () => {
            this._validate(this.inputEl.value);
        });
    }

    static get observedAttributes() {
        return ['label'];
    }

    // change detection for attributes, oldValue and newValue are strings
    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this._render();
    }

    connectedCallback() {
        this._render();
    }

    /**
     * Use properties to assign complex objects to current instance
     */
    set validator(instance) {
        this._validator = instance;
        this._validate(this.inputEl.value);
    }

    _render() {
        this.labelEl.innerText = this.label;
    }

    _validate(value) {
        const result = this._validator.validate(value);
        if (result) {
            this.icon.className = 'fas fa-check';
        } else {
            this.icon.className = 'fas fa-exclamation-circle';
        }
    }
}

// register custom element
window.customElements.define('kode-input', InputComponent);
