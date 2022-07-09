import { Web3Provider } from "@ethersproject/providers";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { WalletConnector } from "../../connectors/WalletConnector";

export const ConnectWallet = (): JSX.Element => {
  const provider = useWeb3React<Web3Provider>()
  const onClick = () => {
    provider.activate(WalletConnector.injected)
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
      <div>ChainId: {provider.chainId}</div>
      <div>Account: {provider.account}</div>
      {provider.active ? (
        <div>✅ </div>
      ) : (
        <button type="button" onClick={onClick}>
          Connect Wallet
        </button>
      )}
    </div>
  )
}
