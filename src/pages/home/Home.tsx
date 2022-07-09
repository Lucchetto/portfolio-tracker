import { Box, Text } from "@chakra-ui/react"
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core"
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";
import { BigNumber, ethers } from "ethers";
import { useEffect, useState } from "react";
import ConnectWalletGuard from "../../components/ConnectWalletGuard/ConnectWalletGuard";
import { ifNotUndefined } from "../../utils/NullabilityUtils";

function AccountBalance(props: { provider: Web3ReactContextInterface<Web3Provider> }): JSX.Element {

    const [balance, setBalance] = useState<BigNumber>()

    useEffect(() => {
        const library = props.provider.library
        const account = props.provider.account
        if (library && account) {
            library.getBalance(account).then((result) => {
                setBalance(result)
            })
        }
    });

    return (
        <>
            <Text>Balance</Text>
            <Text fontWeight={"bold"}>{ ifNotUndefined(balance, (it) => ethers.utils.formatEther(it) + " ETH" ) }</Text>
        </>
    )
}

function Content(props: { provider: Web3ReactContextInterface }): JSX.Element {
    return (
        <Box mx="8" my="10">
            <Text>Address</Text>
            <Text fontWeight={"bold"}>{props.provider.account}</Text>
            <AccountBalance provider={props.provider} />
        </Box>
    )
}

function Home(): JSX.Element {

    const provider = useWeb3React<Web3Provider>()

    return (
        <div>
            {provider.active ? <Content provider={provider} /> : <ConnectWalletGuard provider={provider} />}
        </div>
    )
}

export default Home
