// import React from 'react';
// import{shallow} from "enzyme";
// import Userlogin from '../components/User/Userlogin';

// describe('Test case for testing Adminlogin',() =>{
//     let wrapper;
//     beforeEach(() => {
//       wrapper = shallow(<Userlogin/>);
//       // console.log(wrapper.debug());
//     });
//     test("render the paragraph", () => {
//       // console.log(wrapper.debug());
//       expect(wrapper.find('p').text()).toContain("Vendor Login");
//     });

//  test('should have a btn component and btn component should be named login', ()=> {

//             //There should be only one button
//             expect(wrapper.find('button')).toHaveLength(1);
//             //Button should have matching text
//             expect(wrapper.find('#login').text()).toBe("Login");
//         })


//     it('should have input for email and password', ()=> {
//         //Email and password input field should be present
//         expect(wrapper.find('input#email')).toHaveLength(1);
//         expect(wrapper.find('input#password')).toHaveLength(1);
//         //
//     });

//     it('should have an empty email and password', ()=> {
//         //Optionally test to check if password and email are empty strings on 
//         setup
//         expect(wrapper.state('email')).toEqual('');
//         expect(wrapper.state('password')).toEqual('');
//     });

//     test("render the click event Userlogin",()=>{
//         wrapper.find('#login').simulate("click");
//       }); 

// });