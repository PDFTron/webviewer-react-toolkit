import { mount, shallow } from 'enzyme';
import React from 'react';
import { spy } from 'sinon';
import { ClickableDiv } from '../ClickableDiv';

describe('ClickableDiv component', () => {
  it('renders its contents', () => {
    const clickableDiv = shallow(<ClickableDiv />);
    expect(clickableDiv.find('.ui__clickableDiv')).toHaveLength(1);
  });

  it('snapshot renders default clickableDiv', () => {
    const clickableDiv = shallow(<ClickableDiv />);
    expect(clickableDiv).toMatchSnapshot();
  });

  it('clicking clickableDiv triggers onClick prop', () => {
    const onClick = spy();
    mount(<ClickableDiv onClick={onClick} />).simulate('click');
    expect(onClick.callCount).toBe(1);
  });

  it('clicking disabled clickableDiv does not trigger onClick prop', () => {
    const onClick = spy();
    mount(<ClickableDiv onClick={onClick} disabled />).simulate('click');
    expect(onClick.callCount).toBe(0);
  });
});
