import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {BrowserModule} from '@angular/platform-browser';
import {InputComponent} from './components/input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [
    BrowserModule,
  ],
  entryComponents: [InputComponent],
})
export class LibModule {
  constructor(private injector: Injector) {
    customElements.define('kode-ng-input', createCustomElement(InputComponent, { injector }));
  }

  ngDoBootstrap() {
  }
}
