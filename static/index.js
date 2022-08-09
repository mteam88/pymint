window.onerror = function(msg, url, linenumber) {
  alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
  return true;
}

function connectwallet() {
  if (typeof window.ethereum == undefined) {
    alert('Please install Metamask to use this app!');
  }
  return ethereum.request({ method: 'eth_requestAccounts' });
}

const isMetaMaskConnected = async () => {
  const accounts = await ethereum.request({ method: 'eth_accounts' });
  return accounts.length > 0;
}

async function txStatus(txhash) {
  let receipt = await ethereum.request({
    method: 'eth_getTransactionReceipt',
    params: [txhash],
  });
  if (receipt && receipt.transactionHash == txhash) {
    return receipt.status;
  }
}


async function donate() {
  let connected = await isMetaMaskConnected()
  console.log(connected)
  if (connected == false) {
    console.log("wallet not connected")
    connectwallet().then(res => {donate()})
  } else {
    let txjson = await fetch(`/donate/${ethereum.selectedAddress}`,{
      method: "POST",
    }).then(response => {return response.json()})
    let txid = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [txjson],
    }).catch(error => {alert(JSON.stringify(error.message))})
    if (txid !== undefined) {alert(txid)} // debug
    console.log(await txStatus(txid));
  }
}