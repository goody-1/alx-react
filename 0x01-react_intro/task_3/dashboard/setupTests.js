import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

// src/setupTests.js

global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

