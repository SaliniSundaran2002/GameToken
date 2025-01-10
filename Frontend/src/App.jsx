import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ethers } from "ethers";
import ABI from "./assets/MyToken.json";
import address from "./assets/deployed_addresses.json";
import "./App.css";
import img from './assets/images/bg3.jpg'

const App = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [userAddress, setUserAddress] = useState("");
  const [balance, setBalance] = useState(0);
  const [mintAddress, setMintAddress] = useState("");
  const [mintAmount, setMintAmount] = useState("");

  const connectWallet = async (e) => {
    e.preventDefault();
    if (!window.ethereum) {
      toast.error("MetaMask is not installed!");
      return;
    }

    try {
      const tempProvider = new ethers.BrowserProvider(window.ethereum);
      await tempProvider.send("eth_requestAccounts", []);

      const tempSigner = await tempProvider.getSigner();
      const tempContract = new ethers.Contract(
        address["GameModule#MyToken"],
        ABI.abi,
        tempSigner
      );

      setProvider(tempProvider);
      setSigner(tempSigner);
      setContract(tempContract);

      const userAddress = await tempSigner.getAddress();
      setUserAddress(userAddress);

      const balance = await tempContract.balanceOf(userAddress);
      setBalance(ethers.formatUnits(balance, 2));
    } catch (err) {
      console.error("Failed to connect wallet:", err);
      toast.error("Failed to connect wallet");
    }
  };

  const mintTokens = async () => {
    if (!contract) {
      toast.error("Connect your wallet first!");
      return;
    }
    try {
      const tx = await contract.transfer(mintAddress, ethers.parseUnits(mintAmount, 2));
      await tx.wait();
      toast.success(`Minted ${mintAmount} tokens to ${mintAddress}`);
    } catch (err) {
      console.error("Failed to mint tokens:", err);
      toast.error("Failed to mint tokens");
    }
  };


  return (
    <>
      <ToastContainer />

      <div
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <h1 className="text-6xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mb-6 text-center">
          Token Play
        </h1>
        <div className="border border-red-500 rounded-lg p-8 max-w-lg w-full shadow-[0_4px_16px_rgba(128,0,128,0.5),0_8px_24px_rgba(255,20,147,0.5),0_16px_56px_rgba(0,0,255,0.5)]">

          <button
            onClick={connectWallet}
            className="w-full px-6 py-3 border-2 border-purple-500 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-border text-transparent bg-clip-text text-lg font-semibold rounded-lg shadow hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-purple-500 hover:text-white transition duration-300"
>
            Connect Wallet
          </button>

          {userAddress && (
            <div className="mt-6 text-center">
              <p className="text-lg font-medium text-gray-700">
                <span className="font-bold text-white">Connected Wallet:</span> {userAddress}
              </p>
              <p className="text-lg font-medium text-gray-700">
                <span className="font-bold text-white">Token Balance:</span> {balance} GTK
              </p>
            </div>
          )}

          <div className="mt-8 space-y-4">
          <input
  type="text"
  placeholder="Recipient Address"
  className="w-full px-6 py-3 border-2 border-purple-500 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-border text-transparent bg-clip-text text-lg font-semibold rounded-lg shadow hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-purple-500 hover:text-white transition duration-300"
  value={mintAddress}
  onChange={(e) => setMintAddress(e.target.value)}
/>

<input
  type="number"
  placeholder="Amount"
  className="w-full px-6 py-3 border-2 border-purple-500 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-border text-transparent bg-clip-text text-lg font-semibold rounded-lg shadow hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-purple-500 hover:text-white transition duration-300"
  value={mintAmount}
  onChange={(e) => setMintAmount(e.target.value)}
/>

<button
  onClick={mintTokens}
  className="w-full px-6 py-3 border-2 border-purple-500 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-border text-transparent bg-clip-text text-lg font-semibold rounded-lg shadow hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-purple-500 hover:text-white transition duration-300"
>
  Mint Tokens
</button>
          </div>
        </div>
      </div>
    </>

  );
};

export default App;
