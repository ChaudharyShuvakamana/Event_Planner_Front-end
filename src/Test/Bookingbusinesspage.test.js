import React from 'react';
import{shallow} from "enzyme";
import Bookingbusiness from '../components/Bookingbusinesspage';
describe('Test case for testing Bookingvenue',() =>{
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Bookingbusiness />);
      // console.log(wrapper.debug());
    });
    test("render the h3", () => {
        // console.log(wrapper.debug());
        expect(wrapper.find('h3').text()).toContain("User business");
      });
      test('should have input field for fullname,address,phone,email,eventname,from and to', ()=> {
        //Email and password input field should be present
        expect(wrapper.find('input#fullname'));
        expect(wrapper.find('input#address'));
        expect(wrapper.find('input#number'));
        expect(wrapper.find('input#email'));
        expect(wrapper.find('input#eventname'));
        expect(wrapper.find('input#from'));
        expect(wrapper.find('input#to'));
    });
    test('should have table', ()=> {
      //Email and password input field should be present
      expect(wrapper.find('table#customers'));
  });
})