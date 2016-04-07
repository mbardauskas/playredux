jest.autoMockOff();

import * as React from 'react';
import { shallow } from 'enzyme';
import { ListMoneyEntries } from '../ListMoneyEntries';

describe("Money entry spec", () => {
    let wrapper;
    let moneyEntries = [];

    beforeEach(function () {
        wrapper = shallow(
            <ListMoneyEntries moneyEntries={moneyEntries} />
        );
    });

    it("should be rendered", () => {
        expect(wrapper.find('.money-entries-list').length).toBeTruthy();
    });
});