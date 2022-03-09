import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { useEffect } from "react";

export default function ConnectButton() {
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const etherBalance = useEtherBalance(account);
  useEffect(() => {
    const localData = localStorage.getItem("shouldConnectMetamask");
    if (localData) {
      activateBrowserWallet();
    }
  }, []);

  const handleConnectWallet = () => {
    activateBrowserWallet();
  };
  function handleDeactivateAccount() {
    deactivate();
  }
  return account ? (
    <>
      <div className="container">
        <div className="d-flex justify-content-between">
          <span>Address</span>
          <span>
            {account &&
              `${account.slice(0, 6)}...${account.slice(
                account.length - 4,
                account.length
              )}`}
          </span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Balance</span>
          <span>
            {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)}{" "}
            ETH
          </span>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <button onClick={handleDeactivateAccount} className="btn btn-primary">
          Logout
        </button>
      </div>
    </>
  ) : (
    <div className="text-center">
      <span className="text-danger my-2">
        You are not connected to metamask wallet.
      </span>
      <hr />
      <button onClick={handleConnectWallet} className="btn btn-primary">
        Connect to a wallet
      </button>
    </div>
  );
}

export async function getStaticProps() {
  const localaccount = localStorage.getItem("acc");
  return {
    props: { localaccount },
  };
}
