window.onerror = function(msg, url, linenumber) {
  alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
  return true;
}

function connectwallet() {
  if (typeof window.ethereum == undefined) {
    alert('Please install Metamask to use this app!');
  }
  ethereum.request({ method: 'eth_requestAccounts' });
}

const isMetaMaskConnected = async () => {
  const accounts = await ethereum.request({ method: 'eth_accounts' });
  return accounts.length > 0;
}

function donate() {
  alert(isMetaMaskConnected())
  if (isMetaMaskConnected() == true) {
    console.log("wallet not connected")
    connectwallet()
  } else {
    fetch(`/donate/${ethereum.selectedAddress}`,{
      method: "POST",
    }).then(response => {return response.json()})
      .then(txjson => {
        ethereum.request({
          method: 'eth_sendTransaction',
          params: [txjson],
        }).catch(error => {alert(JSON.stringify(error.message))});
      })
  }
}