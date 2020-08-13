import React from 'react';
import{shallow} from "enzyme";
import Venuepage from '../components/Venuepage';

describe('Test case for testing Venuepage',() =>{
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Venuepage />);
      // console.log(wrapper.debug());
    });
    test("render the paragraph", () => {
      // console.log(wrapper.debug());
      expect(wrapper.find('h2').text()).toContain("Add new Venues");
    });
    test('should have input field for venuename,venuetype,phone,address,email,price and description', ()=> {
      //Email and password input field should be present
      expect(wrapper.find('input#venuename')).toHaveLength(1);
      expect(wrapper.find('input#venuetype')).toHaveLength(1);
      expect(wrapper.find('input#phone')).toHaveLength(1);
      expect(wrapper.find('input#address')).toHaveLength(1);
      expect(wrapper.find('input#email')).toHaveLength(1);
  });
  test('should have an empty venuename,venuetype, address, phone, email state var', ()=> {
      //Optionally test to check if password and email are empty strings on 
      expect(wrapper.state('venuename')).toEqual('');
      expect(wrapper.state('venuetype')).toEqual('');
      expect(wrapper.state('phone')).toEqual('');
      expect(wrapper.state('address')).toEqual('');
      expect(wrapper.state('email')).toEqual('');
  });
test('should have a btn component and btn component should be named post', ()=> {

  //There should be only one button
  expect(wrapper.find('button')).toHaveLength(1);
  //Button should have matching text
  expect(wrapper.find('#venue').text()).toBe(" Post");
})
})