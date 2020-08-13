import React from 'react';
import{shallow} from "enzyme";
import Blogpage from '../components/Blogpage';

describe('Test case for testing Businesspage',() =>{
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Blogpage />);
      // console.log(wrapper.debug());
    });
    test("render the h3", () => {
      // console.log(wrapper.debug());
      expect(wrapper.find('h3').text()).toContain("Add new Blog");
    });
    test('should have textarea field for status', ()=> {
        //Email and password input field should be present
        expect(wrapper.find('textarea#status')).toHaveLength(1);
    });
    test('should have an empty status', ()=> {
        //Optionally test to check if password and email are empty strings on 
        expect(wrapper.state('status')).toEqual('');
    });
    test('should have a btn component and btn component should be named post', ()=> {

        //There should be only one button
        expect(wrapper.find('button')).toHaveLength(1);
        //Button should have matching text
        expect(wrapper.find('#Blog').text()).toBe(" Post");
    })
 
})