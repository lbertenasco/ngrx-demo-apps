import { Injectable, Optional } from '@angular/core';

let nextId = 1;

export class FooServiceConfig {
  name = 'CONFIG_NO_NAME';
}

@Injectable()
export class FooService {
  id = nextId++;
  private _name = 'SERVICE_NO_NAME';

  constructor(@Optional() config: FooServiceConfig) {
    if (config) { this._name = config.name; }
  }

  get name() {
    // Demo: add a suffix if this service has been created more than once
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._name + suffix;
  }

  hello() {
      console.log(`hello ${this._name}, I'm foo service`);
  }
}
