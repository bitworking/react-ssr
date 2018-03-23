import React from 'react';
import { hydrate } from 'react-dom';
import TestComponent from './TestComponent';

const components = window.__APP_INITIAL_STATE__;

for (let id in components) {
  hydrate(<TestComponent {...components[id].props} />, document.getElementById(id));
}

