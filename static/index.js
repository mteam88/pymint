window.onerror = function(msg, url, linenumber) {
  alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
  return true;
}

function connectwallet() {
  if (typeof window.ethereum == 'undefined') {
    alert('Please install Metamask to use this app!');
  }
  ethereum.request({ method: 'eth_requestAccounts' });
}

function donate() {
  //fetch /donate ethereum.selectedAddress
  fetch(`/donate/${ethereum.selectedAddress}`,{
    method: "POST",
  }).then(response => {return response.json()})
    .then(txjson => {
      ethereum.request({
        method: 'eth_sendTransaction',
        params: [txjson],
      });
    })
}