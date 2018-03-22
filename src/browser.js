import React from 'react';
import { hydrate } from 'react-dom';
import TestComponent from './TestComponent';

hydrate(<TestComponent {...window.__APP_INITIAL_STATE__} />, document.getElementById('root'));