'use strict';

import React from 'react';
import { render as renderDOM } from 'react-dom';
import App from './component/app';

const app = document.createElement('div');
document.body.appendChild(app);
renderDOM(<App/>, app);
