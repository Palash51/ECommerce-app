import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store'
import { createMemoryHistory } from 'history'
import { MemoryRouter } from 'react-router-dom';

import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk'
import Product from './index';
import product from './product.json'


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));


describe('Product detail component', () => {

    it('Should match snapshot', () => {
        const store = mockStore({   
            productDetails: product
        })
        const history = createMemoryHistory('/product/1')
        const productProps = {
            match: {
                params: {
                    id: "1"
                }
            },
        }
        const wrapper = mount(
            <Provider store={store}>
              <BrowserRouter>
              <MemoryRouter>
              <Product  {...productProps} history={history}/>
              </MemoryRouter>
            </BrowserRouter>
            </Provider>,
        )
        expect(wrapper).toMatchSnapshot();
    })

    it('Test products details on detail page', () => {
        const store = mockStore({   
            productDetails: product
        })
        const history = createMemoryHistory('/product/1')
        const productProps = {
            match: {
                params: {
                    id: "1"
                }
            },
        }
        const wrapper = mount(
            <Provider store={store}>
              <BrowserRouter>
              <MemoryRouter>
              <Product  {...productProps} history={history}/>
              </MemoryRouter>
            </BrowserRouter>
            </Provider>,
        )
        expect(wrapper.find('[data-testid="product-details"]').children()).toHaveLength(4);
    })    
})

