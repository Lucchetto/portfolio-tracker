import { InjectedConnector } from "@web3-react/injected-connector";

export class WalletConnector {
    static readonly injected = new InjectedConnector({
        supportedChainIds: [1],
    })
}
