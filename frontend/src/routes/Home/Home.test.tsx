import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store'
import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk'
import Home from './index';
import productsList from './productsList.json'


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('Home component', () => {

    it('Should match snapshot', () => {
        const store = mockStore({   
            productList: productsList
        })
        const wrapper = mount(
            <Provider store={store}>
              <BrowserRouter>
              <Home />
            </BrowserRouter>
            </Provider>,
        )
        expect(wrapper).toMatchSnapshot();
    })

    it('Test products listing on home page', () => {
        const store = mockStore({   
            productList: productsList
        })
        const wrapper = mount(
            <Provider store={store}>
              <BrowserRouter>
              <Home />
            </BrowserRouter>
            </Provider>,
        )
        expect(wrapper.find('[data-testid="products-list"]')).toHaveLength(2)
    })    
})

