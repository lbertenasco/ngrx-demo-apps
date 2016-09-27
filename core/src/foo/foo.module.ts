import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { FooComponent } from './foo.component';
import { FooService }  from './foo.service';
import { FooServiceConfig } from './foo.service';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ FooComponent ],
  exports:      [ FooComponent ],
  providers:    [ FooService ]
})
export class FooModule {

  constructor (@Optional() @SkipSelf() parentModule: FooModule) {
    if (parentModule) {
      throw new Error(
        'FooModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: FooServiceConfig): ModuleWithProviders {
    return {
      ngModule: FooModule,
      providers: [
        {provide: FooServiceConfig, useValue: config }
      ]
    };
  }
}
