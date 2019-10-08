import List from './List';
import { isTSAnyKeyword } from '@babel/types';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

describe('<List />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List title='test title' content='test content' />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})

