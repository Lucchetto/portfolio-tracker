import { Token } from "./Token"

export type Chain = {
    chainId: number
    name: string
    baseCurrency: Token
}

export const SUPPORTED_CHAINS: Chain[] = [
    {
        chainId: 1,
        name: "Ethereum",
        baseCurrency: {
            name: "Ether",
            ticker: "ETH",
        }
    }
]
