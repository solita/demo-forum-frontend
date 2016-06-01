// https://github.com/avajs/ava#creating-tests

import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import ForumContainer from '../src/components/ForumContainer';

test('render with container div', t => {
  const wrapper = shallow(React.createElement(ForumContainer));
  t.is(wrapper.find('#container').length, 1);
});

test.todo('will think about writing this later');
