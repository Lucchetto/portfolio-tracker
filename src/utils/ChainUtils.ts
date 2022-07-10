import { Chain, SUPPORTED_CHAINS } from "../models/Chain";

export class ChainUtils {

    /**
     * 
     * 
     * @param chainId the given chain to search
     * @returns the chain matching the given id
     */
    static findChainFromId(chainId: number): Chain | undefined {
        return SUPPORTED_CHAINS.find(item => item.chainId == chainId)
    }
}
