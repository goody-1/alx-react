import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// src/setupTests.js
import '@testing-library/jest-dom';

global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

