from web3 import Web3

import json

from dotenv import load_dotenv
load_dotenv()

w3 = Web3(Web3.HTTPProvider('https://polygon-mumbai.g.alchemy.com/v2/pq-GZIff2RI4x5LVNYxeFSVSYotUdGq3'))

def generate_donate_transaction(from_address):
    return json.dumps({
        'nonce': str(w3.eth.get_transaction_count(Web3.toChecksumAddress(from_address))),
        'from': '0x18181F285D95135F400b5710650a66C6De9aF3ce',
        'to': '0x18181F285D95135F400b5710650a66C6De9aF3ce',
        'value': "0x1000000000000000",
        'data': '',
        })