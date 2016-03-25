interface IMoneyEntry {
    id: number;
    title: string;
    amount: string|number;
}

interface IReducerAction {
    type: string;
}

interface IMoneyEntryAction extends IMoneyEntry, IReducerAction {}

interface AppState {
    moneyEntries: IMoneyEntry[];
}