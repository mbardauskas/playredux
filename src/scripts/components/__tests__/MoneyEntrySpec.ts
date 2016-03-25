jest.autoMockOff();

import * as TestUtils from 'react-addons-test-utils';
import * as React from 'react';
import { MoneyEntry } from '../MoneyEntry';

describe("Money entry spec", () => {
    let element;

    beforeEach(function () {
        element = TestUtils.renderIntoDocument(React.createElement(MoneyEntry, {
            moneyEntry: {
                id: 0,
                title: 'title',
                amount: 100
            },
        }));
    });

    it("should be rendered", () => {
        expect(TestUtils.isCompositeComponent(element)).toBeTruthy();
    });
});