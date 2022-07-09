import { Button, Flex, Spacer, Text } from "@chakra-ui/react"
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core"

function NavBar(): JSX.Element {

    const provider = useWeb3React<Web3Provider>()

    const disconnect = () => {
        provider.deactivate()
    }

    return (
        <Flex height={"custom.appBar"} px={8} alignItems={"center"}>
            <Text fontSize='lg' fontWeight={"bold"}>Portfolio Tracker</Text>
            <Spacer />
            {
                provider.active && <Button onClick={disconnect}>Disconnect</Button>
            }
        </Flex>
    )
}

export default NavBar
