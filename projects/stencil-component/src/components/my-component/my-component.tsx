import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'kode-stencil-input',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() label: string;
  @Prop() validator: { validate: (v) => boolean };
  @Event() inputChange: EventEmitter;

  isValid: boolean;

  handleKeyUp = (e) => {
    if (this.validator) {
      const value = e.target.value;
      this.isValid = this.validator.validate(value);
      if (this.isValid) {
        this.inputChange.emit(`${value}, Date.now ${Date.now()}`);
      }
    }
  };

  render() {
    return <div>
      <label>{this.label}</label>
      <input type="text" onKeyUp={this.handleKeyUp}/>
      <div class="line"></div>
      <i class={this.isValid ? 'fas fa-check' : 'fas fa-times'}></i>

      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"></link>

    </div>;
  }
}
