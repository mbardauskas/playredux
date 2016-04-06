jest.autoMockOff();

import { shallow } from 'enzyme';
import * as React from 'react';
import { MoneyEntry } from '../MoneyEntry';

describe("Money entry spec", () => {
    let element;

    beforeEach(function () {
        element = shallow(React.createElement(MoneyEntry, {
            moneyEntry: {
                id: 0,
                title: 'title',
                amount: 100
            },
        }));
    });

    it("should be rendered", () => {
        expect(element.find('.money-entry')).toBeTruthy();
    });
});