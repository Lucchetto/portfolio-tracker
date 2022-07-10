import { InjectedConnector } from "@web3-react/injected-connector";
import { SUPPORTED_CHAINS } from "../models/Chain";

export class WalletConnector {
    static readonly injected = new InjectedConnector({
        supportedChainIds: SUPPORTED_CHAINS.map(item => item.chainId),
    })
}
