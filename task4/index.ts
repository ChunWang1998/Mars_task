import { data } from "./exampleData"

const usersCollaterals: number[] = data.map(item => Number(item.total_enabled_collateral));
const usersDebts: number[] = data.map(item => Number(item.total_collateralized_debt));

const ratios = usersCollaterals.map((collateral, index) => {
    if (usersDebts[index] === 0) {
        return 0;
    }
    return collateral / usersDebts[index];
});

console.log(ratios)