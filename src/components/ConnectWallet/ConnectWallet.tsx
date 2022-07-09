import { Button } from "@chakra-ui/react";
import { Web3Provider } from "@ethersproject/providers";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { WalletConnector } from "../../connectors/WalletConnector";

export const ConnectWallet = (): JSX.Element => {
  const provider = useWeb3React<Web3Provider>()

  const connect = () => {
    provider.activate(WalletConnector.injected)
  }

  const disconnect = () => {
    provider.deactivate()
  }

  const getErrorMessage = (): string | undefined => {
    const providerError = provider.error
    if (providerError instanceof UnsupportedChainIdError) {
      return "Unsupported chain"
    } else {
      return providerError?.message
    }
  }
  const errorMessage = getErrorMessage()

  return (
    <div>
      { errorMessage && <div>{ errorMessage }</div> }
      {provider.active ? (
        <>
          <div>ChainId: {provider.chainId}</div>
          <div>Account: {provider.account}</div>
          <Button onClick={disconnect}>
          Disconnect
          </Button>
        </>
      ) : (
        <Button colorScheme='blue' onClick={connect}>
          Connect Wallet
        </Button>
      )}
    </div>
  )
}
