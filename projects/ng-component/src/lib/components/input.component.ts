import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation, ɵdetectChanges} from '@angular/core';

export interface Validator {
  validate: (value: string) => boolean;
}

@Component({
  selector: 'kode-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class InputComponent {
  @Input()
  public label: string;

  @Input()
  public validator: Validator;

  @Output()
  public inputChange = new EventEmitter();

  isValid: boolean;

  constructor() {

  }

  public handleKeyup({ target: { value } }): void {
    if (this.validator) {
      this.isValid = this.validator.validate(value);
      if (this.isValid) {
        this.inputChange.emit(value);
      }
      ɵdetectChanges(this);
    }
  }
}
