import { Box, Text } from "@chakra-ui/react"
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core"
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";
import ConnectWalletGuard from "../../components/ConnectWalletGuard/ConnectWalletGuard";

function Content(props: { provider: Web3ReactContextInterface }): JSX.Element {
    return (
        <Box mx="8" my="10">
            <Text>Address</Text>
            <Text fontWeight={"bold"}>{ props.provider.account }</Text>
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
