jest.autoMockOff();

import * as React from 'react';
import { shallow } from 'enzyme';
import { MoneyEntry } from '../MoneyEntry';

describe("Money entry spec", () => {
    let element;
    const moneyEntry:IMoneyEntry = {
        id: 0,
        title: 'title',
        amount: 100
    };

    beforeEach(function () {
        element = shallow(<MoneyEntry moneyEntry={moneyEntry} />);
    });

    it("should be rendered", () => {
        expect(element.find('.money-entry').length).toBeTruthy();
    });
});