import React, { useState, useEffect } from 'react';
import { ethers, Signer, Contract } from 'ethers';
const BDA_abi = require('./utils/BasicDutchAuction.json');

function App() {

  const auction_abi = BDA_abi.abi;
  const bytecode = BDA_abi.bytecode;
  const bytecode_real = "0x61010060405260006003556001600560006101000a81548160ff0219169083151502179055503480156200003257600080fd5b506040516200114438038062001144833981810160405281019062000058919062000122565b82608081815250508160a081815250508060c0818152505080826200007e9190620001ad565b836200008b9190620001f8565b60e08181525050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504360028190555050505062000233565b600080fd5b6000819050919050565b620000fc81620000e7565b81146200010857600080fd5b50565b6000815190506200011c81620000f1565b92915050565b6000806000606084860312156200013e576200013d620000e2565b5b60006200014e868287016200010b565b935050602062000161868287016200010b565b925050604062000174868287016200010b565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620001ba82620000e7565b9150620001c783620000e7565b9250828202620001d781620000e7565b91508282048414831517620001f157620001f06200017e565b5b5092915050565b60006200020582620000e7565b91506200021283620000e7565b92508282019050808211156200022d576200022c6200017e565b5b92915050565b60805160a05160c05160e051610ec96200027b60003960006107b1015260008181610717015261077801526000818161047501526106bc015260006107e30152610ec96000f3fe6080604052600436106100915760003560e01c8063922ba6d911610059578063922ba6d914610172578063cca414271461019d578063dfbf53ae146101c8578063eb91d37e146101f3578063f07223221461021e57610091565b806310a37c26146100965780631998aeef146100c1578063277951a9146100df57806370a082311461010a57806384b09e8614610147575b600080fd5b3480156100a257600080fd5b506100ab610249565b6040516100b89190610848565b60405180910390f35b6100c9610303565b6040516100d69190610848565b60405180910390f35b3480156100eb57600080fd5b506100f46106b8565b604051610101919061087c565b60405180910390f35b34801561011657600080fd5b50610131600480360381019061012c91906108c8565b6106e0565b60405161013e919061087c565b60405180910390f35b34801561015357600080fd5b5061015c6106ea565b6040516101699190610848565b60405180910390f35b34801561017e57600080fd5b50610187610713565b604051610194919061087c565b60405180910390f35b3480156101a957600080fd5b506101b261073b565b6040516101bf9190610910565b60405180910390f35b3480156101d457600080fd5b506101dd61074e565b6040516101ea9190610848565b60405180910390f35b3480156101ff57600080fd5b50610208610774565b604051610215919061087c565b60405180910390f35b34801561022a57600080fd5b506102336107df565b604051610240919061087c565b60405180910390f35b60003373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146102db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d290610988565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600560009054906101000a900460ff16610354576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034b906109f4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146103e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103dc90610a86565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1603610473576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046a90610b18565b60405180910390fd5b7f0000000000000000000000000000000000000000000000000000000000000000600254436104a29190610b67565b11156104e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104da90610c33565b60405180910390fd5b60004711610526576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051d90610cc5565b60405180910390fd5b61052e610774565b341015610570576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056790610d57565b60405180910390fd5b6003600081548092919061058390610d77565b91905055506000600354116105cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c490610e31565b60405180910390fd5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610674573d6000803e3d6000fd5b506000600560006101000a81548160ff021916908315150217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000479050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b600560009054906101000a900460ff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f0000000000000000000000000000000000000000000000000000000000000000600254436107a59190610b67565b6107af9190610e51565b7f00000000000000000000000000000000000000000000000000000000000000006107da9190610b67565b905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061083282610807565b9050919050565b61084281610827565b82525050565b600060208201905061085d6000830184610839565b92915050565b6000819050919050565b61087681610863565b82525050565b6000602082019050610891600083018461086d565b92915050565b600080fd5b6108a581610827565b81146108b057600080fd5b50565b6000813590506108c28161089c565b92915050565b6000602082840312156108de576108dd610897565b5b60006108ec848285016108b3565b91505092915050565b60008115159050919050565b61090a816108f5565b82525050565b60006020820190506109256000830184610901565b92915050565b600082825260208201905092915050565b7f596f7520617265207468652077696e6e65720000000000000000000000000000600082015250565b600061097260128361092b565b915061097d8261093c565b602082019050919050565b600060208201905081810360008301526109a181610965565b9050919050565b7f41756374696f6e20697320636c6f736564000000000000000000000000000000600082015250565b60006109de60118361092b565b91506109e9826109a8565b602082019050919050565b60006020820190508181036000830152610a0d816109d1565b9050919050565b7f596f75206a757374206d6973736564206f75742120546865726520697320616c60008201527f726561647920612077696e6e657220666f722074686973206974656d00000000602082015250565b6000610a70603c8361092b565b9150610a7b82610a14565b604082019050919050565b60006020820190508181036000830152610a9f81610a63565b9050919050565b7f4f776e65722063616e6e6f74207375626d697420626964206f6e206f776e206960008201527f74656d0000000000000000000000000000000000000000000000000000000000602082015250565b6000610b0260238361092b565b9150610b0d82610aa6565b604082019050919050565b60006020820190508181036000830152610b3181610af5565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610b7282610863565b9150610b7d83610863565b9250828203905081811115610b9557610b94610b38565b5b92915050565b7f41756374696f6e2068617320636c6f736564202d20746f74616c206e756d626560008201527f72206f6620626c6f636b73207468652061756374696f6e206973206f70656e2060208201527f666f722068617665207061737365640000000000000000000000000000000000604082015250565b6000610c1d604f8361092b565b9150610c2882610b9b565b606082019050919050565b60006020820190508181036000830152610c4c81610c10565b9050919050565b7f596f7572206163636f756e74732062616c616e6365206973206e6f742067726560008201527f61746572207468616e2030000000000000000000000000000000000000000000602082015250565b6000610caf602b8361092b565b9150610cba82610c53565b604082019050919050565b60006020820190508181036000830152610cde81610ca2565b9050919050565b7f596f752068617665206e6f742073656e742073756666696369656e742066756e60008201527f6473000000000000000000000000000000000000000000000000000000000000602082015250565b6000610d4160228361092b565b9150610d4c82610ce5565b604082019050919050565b60006020820190508181036000830152610d7081610d34565b9050919050565b6000610d8282610863565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610db457610db3610b38565b5b600182019050919050565b7f5468657265206d757374206265206174206c65617374206f6e6520626964207460008201527f6f2066696e616c697a6500000000000000000000000000000000000000000000602082015250565b6000610e1b602a8361092b565b9150610e2682610dbf565b604082019050919050565b60006020820190508181036000830152610e4a81610e0e565b9050919050565b6000610e5c82610863565b9150610e6783610863565b9250828202610e7581610863565b91508282048414831517610e8c57610e8b610b38565b5b509291505056fea26469706673582212203871d91aa4e329938edc437da3fedf0e5657a121eb1fc44d9ecab9b43968936e64736f6c63430008110033"
  const [reservePrice, setReservePrice] = useState('');
  const [numBlocksAuctionOpen, setNumBlocksAuctionOpen] = useState('');
  const [offerPriceDecrement, setOfferPriceDecrement] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [isAuctionOpen, setIsAuctionOpen] = useState(false);
  const [winner, setWinner] = useState('');
  const [seller, setSeller] = useState('');

  const [connectedWallet, setConnectedAddress] = useState('')
  const [bal, setAddressBalance] = useState('')
  const [contractAddress, setContractAddress] = useState('')
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [constructorArgs, setConstructorParameter] = useState({
    reservePrice: '',
    numBlocksAuctionOpen: '',
    offerPriceDecrement: '',
  })

  // connect to wallet
  const connect = () =>  {
    if(!window.ethereum)
      alert("Please install metamask extension")

    // connect wallet
    window.ethereum.request({method: 'eth_requestAccounts'})
    .then((result: any)=>{
      console.log(result);
      setConnectedAddress(result);
      setBalance(result);
      setAuctionContractAddress(result);
      setIsWalletConnected(true);
      alert("Metamask wallet connected")
    })
    // function to get connected address's balance
    async function setBalance(connectedWallet:any){
    window.ethereum.request({
      method:'eth_getBalance',
      params:[String(connectedWallet), 'latest']
    }).then((balance : any) => {
      setAddressBalance(ethers.utils.formatEther(balance));
      // return string value to convert it into int balances
      console.log(balance)
      console.log(ethers.utils.formatEther(balance))
    })
    .catch((error:any)=>console.log(error));
    }
    // function to return contract address
    async function setAuctionContractAddress(connectedWallet:any){
      window.ethereum.request({
        method:'eth_getBalance',
        params:[String(connectedWallet), 'latest']
      }).then((cAddress : any) => {
        setContractAddress(cAddress);
      })
    }
    console.log('Metamask wallet connected');
  }


  const deployBasicDutchAuction = async() =>{
    console.log('Attempting to deploy auction...');
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log('Provider created');
    const signer = provider.getSigner(); 
    console.log('Signer created');
    const AuctionFactory = new ethers.Contract(contractAddress, auction_abi, signer);  
    // const AuctionFactory = new ethers.Contract(auction_abi, bytecode_real, signer);   
    console.log('AuctionFactory created');
    const AuctionToken = await AuctionFactory.deploy(constructorArgs);
    console.log('AuctionToken created');
    setContractAddress(contractAddress);
    console.log('Contract Address set');
    // console.log(AuctionToken);
    await AuctionToken.deployed();
    console.log('Auction successfully deployed with requested parameters');
    let currentPrice = await AuctionToken.getCurrentPrice();
    console.log('Current price is',currentPrice);
    setIsAuctionOpen(true);
    console.log('Auction is now set to open');
  }

  // current version just for testing
  async function showInfo(){
    // export const loadCurrentMessage = async () => {
    //   const reservePrice = await BasicDutchAuction.methods.message().call();
    //   return reservePrice;
    // }
    
    // return numBlocksAuctionOpen;
    // return offerPriceDecrement; 
  }

  async function bid() {
    // const auction = new ethers.Contract(contractAddress, BDA_abi.abi, signer);
    // const bidTx = await auction.bid({value: currentPrice});
    // await bidTx.wait();
    // if(bidTx >= currentPrice)
    //   setIsAuctionOpen(false);
    //   setCurrentPrice(await auction.getCurrentPrice());
    //   setWinner(await auction.getWinnerAddress());
    
    // if(bidTx === "")
    //   alert('Please do not leave bid box empty')
    // if(bidTx < currentPrice)
    //   alert('Cannot bid below current price');
    // if(bidTx < setAddressBalance(ethers.utils.formatEther(bal)))
    //   alert('Cannot bid more wei than you own')
    // else
    //   alert('Thank you for bidding');
  }

  return (
    <div>
      <center>
      <h1>Basic Dutch Auction</h1>
      <div>
        <h2>
          <button onClick={connect}>Connect</button>
          <button disabled={!isWalletConnected} onClick={disconnect}>Disconnect</button>
        </h2>
          <p>Connected Wallet Address <br></br>{connectedWallet}</p>
          <p>Wallet Balance <br></br>{bal}</p>
          <p>Contract Address <br></br>{contractAddress}</p>
      </div>
      <div>
        <h2>Deployment</h2>
        <p>Reserve Price {reservePrice}</p>
        <input type = 'number'></input>
        <p>Number of Blocks Auction Open for{numBlocksAuctionOpen}</p>
        <input type = 'number'></input>
        <p>Price Decrement {offerPriceDecrement}</p>
        <input type = 'number'></input>
        <p></p>
        <button disabled={isAuctionOpen} onClick={deployBasicDutchAuction}>Deploy</button>
        <h2>Information</h2>
        <button disabled={!isAuctionOpen} onClick={showInfo}>Show Info</button>
          <p>Auction Open: {isAuctionOpen ? 'Yes' : 'No'}</p>
          <p>Reserve Price: {}</p>
          <p>Number of Blocks Auction Open for: {}</p>
          <p>Price Decrement: {}</p>
        <div>
        <h2>Bid</h2>
        <input type = 'number'></input>
        <p></p>
        <button disabled={!isAuctionOpen} onClick={bid}>Bid</button>
        </div>
        <h2>Result</h2>
        <p>Current Price: {currentPrice}</p>
        <p>Winner: {winner ? winner : 'None'}</p>
        <p>Seller: {seller}</p>
      </div>
      </center>
    </div>
  );
}

export default App;

  // disconnect from wallet
  const disconnect = () =>  {
    // ethereum.on('disconnect', handler: (error: ProviderRpcError) => void);
    // ethereum.on('accountsChanged', handler: (accounts: Array<string>) => void);
    // ethereum.on('chainChanged', handler: (chainId: string) => void);
    //   ethereum.on('chainChanged', (_chainId) => window.location.reload());
  }

  // useEffect(() => {
  //   async function fetchData() {
  //     const auction = new ethers.Contract(contractAddress, BDA_abi.abi, provider);
  //     setReservePrice(await auction.getReservePrice());
  //     setNumBlocksAuctionOpen(await auction.getNumBlocksAuctionOpen());
  //     setOfferPriceDecrement(await auction.getPriceDecrement());
  //     setCurrentPrice(await auction.getCurrentPrice());
  //     setIsAuctionOpen(await auction.isAuctionOpen(true));
  //     setWinner(await auction.getWinnerAddress());
  //     setSeller(await auction.getSellerAddress());
  //   }
  //   fetchData();
  // }, []);

    // // deploy smart contract
  // const deployAuction = () =>  {
  //   BasicDutchAuction();
  //   // deployAuction();
  //   //if(reservePrice != '' && numBlocksAuctionOpen != '' && offerPriceDecrement != ''){
  //        setIsAuctionOpen(true);
  //   //     alert('Auction contract deployed with set parameters');
  //   //}
  //   //else
  //   //     alert('Please enter only integers in the boxes above');
  // }