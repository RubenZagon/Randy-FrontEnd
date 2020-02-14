import './stylePreview.css'
import {
  withTests
} from '@storybook/addon-jest';
import {
  addParameters,
  addDecorator
} from '@storybook/react';
import {
  INITIAL_VIEWPORTS,
  // or MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport';
import {
  withA11y
} from '@storybook/addon-a11y';
import {
  withKnobs
} from '@storybook/addon-knobs';
import results from '../src/stories/__test__/.jest-test-results.json';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6' // newViewports would be an ViewportMap. (see below for examples)
  },
});

addDecorator(
  withA11y,
  withKnobs,
  withTests({
    results,
    filesExt: '((\\.specs?)|(\\.tests?)|(\\.test?))?((\\.ts)|(\\.tsx)|(\\.js)|(\\.jsx))$',
  })
);
