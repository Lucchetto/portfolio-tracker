import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { WalletConnector } from "../../connectors/WalletConnector";

export const ConnectWallet = () => {
  const provider = useWeb3React<Web3Provider>()
  const onClick = () => {
    provider.activate(WalletConnector.injected)
  }

  return (
    <div>
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
