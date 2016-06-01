// https://github.com/avajs/ava#creating-tests

import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/components/app';

test('render with container div', t => {
  const wrapper = shallow(React.createElement(App));
  t.is(wrapper.find('#container').length, 1);
});

test.todo('will think about writing this later');
