import React from 'react';
import{shallow} from "enzyme";
import Businesspage from '../components/Businesspage';

describe('Test case for testing Businesspage',() =>{
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Businesspage />);
      // console.log(wrapper.debug());
    });
    test("render the h3", () => {
      // console.log(wrapper.debug());
      expect(wrapper.find('h3').text()).toContain("Add new businesss");
    });
    test('should have input field for businessname,businesstype,phone,address,email,price and description', ()=> {
        //Email and password input field should be present
        expect(wrapper.find('input#businessname')).toHaveLength(1);
        expect(wrapper.find('select#businesstype')).toHaveLength(1);
        expect(wrapper.find('input#phone')).toHaveLength(1);
        expect(wrapper.find('input#address')).toHaveLength(1);
        expect(wrapper.find('input#email')).toHaveLength(1);
        expect(wrapper.find('input#price')).toHaveLength(1);
    });
    test('should have an empty fullname, address, number, email and password state var', ()=> {
        //Optionally test to check if password and email are empty strings on 
        expect(wrapper.state('businessname')).toEqual('');
        expect(wrapper.state('businesstype')).toEqual('');
        expect(wrapper.state('phone')).toEqual('');
        expect(wrapper.state('address')).toEqual('');
        expect(wrapper.state('email')).toEqual('');
        expect(wrapper.state('price')).toEqual('');
    });
 test('should have a btn component and btn component should be named post', ()=> {

    //There should be only one button
    expect(wrapper.find('button')).toHaveLength(1);
    //Button should have matching text
    expect(wrapper.find('#business').text()).toBe(" Post");
})
})