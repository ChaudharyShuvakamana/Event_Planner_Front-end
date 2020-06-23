import React from 'react';


import{shallow} from "enzyme";
import Signup from '../components/User/Usersignup';

describe('Test case for testing Signup',() =>{
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Signup />);
      // console.log(wrapper.debug());
    });
    test("render the paragraph", () => {
      // console.log(wrapper.debug());
      expect(wrapper.find('p').text()).toContain("User Registration");
    });

 test('should have a btn component and btn component should be named signup', ()=> {

            //There should be only one button
            expect(wrapper.find('button')).toHaveLength(1);
            //Button should have matching text
            expect(wrapper.find('#signup').text()).toBe("Sign up");
        })
    test('should have input field for firstname,lastname,location,phonenumber,email and password', ()=> {
      //Email and password input field should be present
      expect(wrapper.find('input#firstname')).toHaveLength(1);
      expect(wrapper.find('input#lastname')).toHaveLength(1);
      expect(wrapper.find('input#location')).toHaveLength(1);
      expect(wrapper.find('input#phonenumber')).toHaveLength(1);
      expect(wrapper.find('input#email')).toHaveLength(1);
      expect(wrapper.find('input#password')).toHaveLength(1);
  });

test('should have an empty firstname, lastname, phonenumber, location email and password state var', ()=> {
      //Optionally test to check if password and email are empty strings on 
      expect(wrapper.state('firstname')).toEqual('');
      expect(wrapper.state('lastname')).toEqual('');
      expect(wrapper.state('location')).toEqual('');
      expect(wrapper.state('phonenumber')).toEqual('');
      expect(wrapper.state('email')).toEqual('');
      expect(wrapper.state('password')).toEqual('');
  });
 
test("render the click event signup",()=>{
  wrapper.find('#signup').simulate("click");
}); 

})