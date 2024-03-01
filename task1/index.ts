import { CronJob } from 'cron';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { rpcURL, contractAddress, userIds } from './constant';

const queryContract = async (rpcURL: string, contractAddress: string, userIds: string[]) => {
    const client = await SigningCosmWasmClient.connect(rpcURL);
    const queryMsgs = userIds.map(userId => {
        return {
            user_position: {
                user: userId
            }
        };
    });

    for (const queryMsg of queryMsgs) {
        const queryResult = await client.queryContractSmart(
            contractAddress,
            queryMsg
        );
        console.log(queryResult);
    }
};

const job = new CronJob('*/10 * * * * *', async () => {
    console.log('Executing queryContract function...');
    await queryContract(rpcURL, contractAddress, userIds);
});

job.start();
