import { Button, Container, Text, theme } from "@chakra-ui/react"
import { Web3ReactContextInterface } from "@web3-react/core/dist/types"
import { IoWalletOutline } from "react-icons/io5";
import { WalletConnector } from "../../connectors/WalletConnector"

type ConnectWalletGuardProps = {
    provider: Web3ReactContextInterface
}

function ConnectWalletGuard(props: ConnectWalletGuardProps): JSX.Element {
    const connect = () => {
        props.provider.activate(WalletConnector.injected)
    }

    return (
        <Container maxW='2xl' centerContent>
            <IoWalletOutline size={theme.sizes["3xs"]} />
            <Text fontWeight={"bold"} mb={4} fontSize='2xl'>Connect a wallet to start using Portfolio Tracker</Text>
            <Button colorScheme='blue' onClick={connect}>Connect wallet</Button>
        </Container>
    )
}

export default ConnectWalletGuard
