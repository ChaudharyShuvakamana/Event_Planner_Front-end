import React from 'react';
import{shallow} from "enzyme";
import Businessblist from '../components/Bbusinessbooklist';
describe('Test case for testing Business book list',() =>{
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Businessblist />);
      // console.log(wrapper.debug());
    });
    test("render the h3", () => {
        // console.log(wrapper.debug());
        expect(wrapper.find('h3').text()).toContain("User business booklist");
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

})