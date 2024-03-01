# Intro
Using smart queries to obtain user positions allows us to normalize collateral and debt. However, it prompts us to consider another question: Why might this approach not be particularly scalable in a mainnet environment, especially if we were dealing with, for example, 50,000 users to query positions for?

## Script
Retrieve the collateralization ratio from the user's position as stored in `exampleData.ts` from Task 1.
```
ts-node index.ts
```

## Output log

```
[
  1.5668490518708347,
  0,
  1.7652528884512027,
  1.3468604301639087,
  2.854249369230747
]
```

# Opinion
I believe potential issues could arise due to limitations with RPC. When numerous users access the same RPC simultaneously, public nodes may face restrictions, resulting in RPC errors. Potential solutions include:

- Utilizing more public RPCs during smart query operations, switching to another RPC if one becomes unavailable (that's the method I previously employed in Solana development), thus enhancing reliability.
- Directly applying for private RPC to avoid sharing with other projects utilizing public RPCs.
- Project owners adopting an indexed data approach, storing required data in a database and providing query examples to users, enabling them to directly access the desired information. Although this method leans towards centralization, it effectively resolves delays in data retrieval caused by multiple parties utilizing RPCs. However, ensuring project owners accurately and promptly store data into the database poses another challenge.