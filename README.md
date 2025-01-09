# GameToken - ERC-20 Token with Blockchain Integration
## Overview
GameToken is a decentralized token based on the Ethereum blockchain, following the ERC-20 standard. It is designed to facilitate in-game purchases, rewards, and transactions within a gaming ecosystem. This project includes a smart contract for minting and transferring tokens, as well as a frontend application that allows users to interact with the token through a simple interface.

## Features
**ERC-20 Token Standard**: A widely accepted token standard on the Ethereum blockchain for creating and managing tokens.
**Token Transfer**: Users can send tokens to other addresses directly through the frontend application.
**Metamask Integration**: The app uses Metamask for wallet management and transaction signing.
**Blockchain Verification**: All token transfers are verified on the Ethereum blockchain.
**Responsive Interface**: A simple and responsive UI for transferring tokens to any Ethereum address.
## Project Structure
- Smart Contract (Solidity)
- Token contract implementing the ERC-20 standard.
- Provides functionality for transferring tokens between users.
- Frontend (React.js)
- A React-based user interface to interact with the Ethereum blockchain.
- Allows users to input recipient addresses and send GameTokens.
  
## Prerequisites
**Metamask Wallet**: Install Metamask for interacting with Ethereum.

**Ethereum Network**: You can deploy the contract on any Ethereum network (e.g., Mainnet, Rinkeby, Goerli, etc.).

**Node.js & npm**: Ensure you have Node.js installed on your machine.

## Installation
## 1. Clone the repository
```bash
    git clone https://github.com/SaliniSundaran2002/GameToken.git
    cd GameToken
```
## 2. Install dependencies
Navigate to the frontend directory and install the necessary npm packages:

```bash
cd frontend
npm install

```
## 3. Set up the Smart Contract
Ensure the smart contract is deployed to your preferred Ethereum network.
Replace the contract address in the frontend code with the deployed contract address.

## How to Use
1. Deploy the Token Contract
You can deploy the GameToken.sol contract using Remix IDE . Make sure to replace YOUR_CONTRACT_ADDRESS in the frontend with the actual deployed contract address.

2. Connect Metamask
Once your Metamask wallet is set up and connected to the correct network, click the "Connect Wallet" button on the frontend to link your wallet.

3. Send Tokens
Enter the recipient’s address in the text box.
Enter the amount of GameTokens to send.
Click the "Send Tokens" button to initiate the transaction. The transaction will be processed and verified on the Ethereum blockchain.
Code Overview
Smart Contract (ERC-20 Token)
The smart contract implements the basic functions of an ERC-20 token, such as transfer and balanceOf.
The contract has a minting function to create new tokens and assign them to the contract owner.
Frontend (React)
The frontend uses Web3.js to connect to the Ethereum blockchain and interact with the deployed ERC-20 contract.
The UI provides a form to input a recipient's address and token amount, and allows the user to send tokens from their wallet.
## Testing
## Smart Contract:

Use Hardhat to test the smart contract locally before deploying to the main network.
Make sure to test the transfer and mint functionalities.
## Frontend:

After connecting your wallet, ensure that the token transfer is successful.
Check your Ethereum account balance in Metamask after each transaction.
Contributing
We welcome contributions! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
**Solidity**: For creating the token contract.
**Ethers.js**: For providing an interface to interact with the Ethereum blockchain.
**Metamask**: For enabling Ethereum wallet integration in the browser.
