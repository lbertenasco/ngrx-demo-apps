import { Component, OnInit } from '@angular/core';
import { FooService }      from '../foo/foo.service';

@Component({
  selector: 'app-foo',
  template: `<p>
    foo works!!!
    {{this.name}}
  </p>`
})
export class FooComponent implements OnInit {
  name = '';
  constructor(fooService: FooService) {
    this.name = fooService.name;
  }

  ngOnInit() {
  }

}
