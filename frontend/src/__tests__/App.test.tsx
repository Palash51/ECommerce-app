import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';


describe('App component', () => {

    it('Should match snapshot', () => {
        const tree = shallow(<App />)
        expect(tree).toMatchSnapshot();
    })
    
})

