/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { WillItBlendComponent } from './will-it-blend.component';

describe('Component: WillItBlend', () => {
  let component = new WillItBlendComponent();

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
  it('should not blend from beginning', () => {
    expect(component.willItBlend).toBeFalsy();
  });
});
