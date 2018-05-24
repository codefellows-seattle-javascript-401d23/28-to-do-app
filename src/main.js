import React from 'react';
import { render as reactDomReader } from 'react-dom';
import App from '../src/component/app';

const container = document.createElement('div');
document.body.appendChild(container);
reactDomReader(<App />, container);
