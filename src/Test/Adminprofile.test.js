import React from 'react';


import{shallow} from "enzyme";
import Updateprofile from '../components/Admin/AdminProfile';

describe('Test case for testing Updateprofile',() =>{
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Updateprofile />);
      // console.log(wrapper.debug());
    });
    test("render the h3", () => {
      // console.log(wrapper.debug());
      expect(wrapper.find('h3').text()).toContain("Edit profile");
    });

 test('should have a btn component and btn component should be named Updateprofile', ()=> {

            //There should be only one button
            expect(wrapper.find('button')).toHaveLength(1);
            //Button should have matching text
            expect(wrapper.find('#updateprofile').text()).toBe("Update Profile");
        })
    test('should have input field for fullname,address,number,email and password', ()=> {
      //Email and password input field should be present
      expect(wrapper.find('input#fullname')).toHaveLength(1);
      expect(wrapper.find('input#address')).toHaveLength(1);
      expect(wrapper.find('input#number')).toHaveLength(1);
      expect(wrapper.find('input#email')).toHaveLength(1);
      expect(wrapper.find('input#password')).toHaveLength(1);
  });

test('should have an empty fullname, address, number, email and password state var', ()=> {
      //Optionally test to check if password and email are empty strings on 
      expect(wrapper.state('fullname')).toEqual('');
      expect(wrapper.state('address')).toEqual('');
      expect(wrapper.state('number')).toEqual('');
      expect(wrapper.state('email')).toEqual('');
      expect(wrapper.state('password')).toEqual('');
  });
 
test("render the click event Updateprofile",()=>{
  wrapper.find('#updateprofile').simulate("click");
}); 

})