import React from 'react';
import { render as reactDomRender } from 'react-dom';
import App from '../src/component/app/app';
import './styles/main.scss';

const container = document.createElement('div');
document.body.appendChild(container);
reactDomRender(<App />, container);

