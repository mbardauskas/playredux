let nextMoneyEntryId = 0;
export const addMoneyEntry = (title: string, amount: number):IMoneyEntryAction => {
    return {
        type: 'ADD_MONEY_ENTRY',
        id: nextMoneyEntryId++,
        title,
        amount
    }
};