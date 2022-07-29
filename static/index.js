function connectwallet() {
    if (typeof window.ethereum == 'undefined') {
        alert('Please install Metamask to use this app!');
      }
    ethereum.request({ method: 'eth_requestAccounts' });
}