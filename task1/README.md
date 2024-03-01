# Intro
- Utilize the code snippet for querying the Celatone Query Contract:
https://osmosis.celat.one/osmosis-1/query?contract=osmo1c3ljch9dfw5kf52nfwpxd2zmj2ese7agnx0p9tenkrryasrle5sqf3ftpg, inputting "user_position" as the method.
- Implement a loop to query the data of a user written within the constant.
- Regularly fetch the latest data locally via cronjob.

# Script
```
ts-node index.ts
```

# Output log
```
{
  total_enabled_collateral: '95262587139',
  total_collateralized_debt: '70729368096',
  weighted_max_ltv_collateral: '72280054078',
  weighted_liquidation_threshold_collateral: '74193855787',
  health_status: {
    borrowing: {
      max_ltv_hf: '1.021924216541780427',
      liq_threshold_hf: '1.048982307975630411'
    }
  }
}
{
  total_enabled_collateral: '599807344',
  total_collateralized_debt: '210145389',
  weighted_max_ltv_collateral: '320896929',
  weighted_liquidation_threshold_collateral: '329894039',
  health_status: {
    borrowing: {
      max_ltv_hf: '1.527023412348105339',
      liq_threshold_hf: '1.569837152125188909'
    }
  }
}
...

```
`total_enabled_collateral` and `total_collateralized_debt` are user collaterals and user debts. 