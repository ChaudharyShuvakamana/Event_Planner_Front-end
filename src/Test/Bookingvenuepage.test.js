import React from 'react';
import{shallow} from "enzyme";
import Bookingvenue from '../components/Bookingvenuepage';
describe('Test case for testing Bookingvenue',() =>{
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Bookingvenue />);
      // console.log(wrapper.debug());
    });
    test("render the h3", () => {
        // console.log(wrapper.debug());
        expect(wrapper.find('h3').text()).toContain("User venues");
      });

      test('should have input field for should have input field for fullname,address,phone,email,eventname and date', ()=> {
        //Email and password input field should be present
        expect(wrapper.find('input#Fullname'));
        expect(wrapper.find('input#Address'));
        expect(wrapper.find('input#Number'));
        expect(wrapper.find('input#Email'));
        expect(wrapper.find('input#Eventname'));
        expect(wrapper.find('input#Date'));
    });
    test('should have table', ()=> {
      //Email and password input field should be present
      expect(wrapper.find('table#customers'));
  });
  
})