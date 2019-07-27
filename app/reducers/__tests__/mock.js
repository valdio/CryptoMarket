import * as types from '../../actions/types'

export const cryptoListActionMock = {
  type: types.LIST_CRYPTOCURRENCIES,
  isFirstPageLoad: true,
  response: {
    'data': [
      {
        'id': 1,
        'name': 'Bitcoin',
        'symbol': 'BTC',
        'slug': 'bitcoin',
        'cmc_rank': 5,
        'num_market_pairs': 500,
        'circulating_supply': 16950100,
        'total_supply': 16950100,
        'max_supply': 21000000,
        'last_updated': '2018-06-02T22:51:28.209Z',
        'date_added': '2013-04-28T00:00:00.000Z',
        'tags': [
          'mineable'
        ],
        'platform': null,
        'quote': {
          'USD': {
            'price': 9283.92,
            'volume_24h': 7155680000,
            'percent_change_1h': -0.152774,
            'percent_change_24h': 0.518894,
            'percent_change_7d': 0.986573,
            'market_cap': 158055024432,
            'last_updated': '2018-08-09T22:53:32.000Z'
          },
          'BTC': {
            'price': 1,
            'volume_24h': 772012,
            'percent_change_1h': 0,
            'percent_change_24h': 0,
            'percent_change_7d': 0,
            'market_cap': 17024600,
            'last_updated': '2018-08-09T22:53:32.000Z'
          }
        }
      }
    ],
    'status': {
      'timestamp': '2018-06-02T22:51:28.209Z',
      'error_code': 0,
      'error_message': '',
      'elapsed': 10,
      'credit_count': 1
    }
  }
}

export const cryptoMetadataActionMock = {
  type: types.CRYPTO_META_DATA,
  cryptoID: 1,// bitcoin ids
  response: {
    'data': {
      '1': {
        'urls': {
          'website': [
            'https://bitcoin.org/'
          ],
          'technical_doc': [
            'https://bitcoin.org/bitcoin.pdf'
          ],
          'twitter': [],
          'reddit': [
            'https://reddit.com/r/bitcoin'
          ],
          'message_board': [
            'https://bitcointalk.org'
          ],
          'announcement': [],
          'chat': [],
          'explorer': [
            'https://blockchain.coinmarketcap.com/chain/bitcoin',
            'https://blockchain.info/',
            'https://live.blockcypher.com/btc/'
          ],
          'source_code': [
            'https://github.com/bitcoin/'
          ]
        },
        'logo': 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
        'id': 1,
        'name': 'Bitcoin',
        'symbol': 'BTC',
        'slug': 'bitcoin',
        'description': 'Bitcoin (BTC) is a consensus network that enables a new payment system and a completely digital currency. Powered by its users, it is a peer to peer payment network that requires no central authority to operate. On October 31st, 2008, an individual or group of individuals operating under the pseudonym "Satoshi Nakamoto" published the Bitcoin Whitepaper and described it as: "a purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution."',
        'date_added': '2013-04-28T00:00:00.000Z',
        'tags': [
          'mineable'
        ],
        'platform': null,
        'category': 'coin'
      },
      '1027': {
        'urls': {
          'website': [
            'https://www.ethereum.org/'
          ],
          'technical_doc': [
            'https://github.com/ethereum/wiki/wiki/White-Paper'
          ],
          'twitter': [
            'https://twitter.com/ethereum'
          ],
          'reddit': [
            'https://reddit.com/r/ethereum'
          ],
          'message_board': [
            'https://forum.ethereum.org/'
          ],
          'announcement': [
            'https://bitcointalk.org/index.php?topic=428589.0'
          ],
          'chat': [
            'https://gitter.im/orgs/ethereum/rooms'
          ],
          'explorer': [
            'https://blockchain.coinmarketcap.com/chain/ethereum',
            'https://etherscan.io/',
            'https://ethplorer.io/'
          ],
          'source_code': [
            'https://github.com/ethereum'
          ]
        },
        'logo': 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
        'id': 1027,
        'name': 'Ethereum',
        'symbol': 'ETH',
        'slug': 'ethereum',
        'description': 'Ethereum (ETH) is a smart contract platform that enables developers to build decentralized applications (dapps) conceptualized by Vitalik Buterin in 2013. ETH is the native currency for the Ethereum platform and also works as the transaction fees to miners on the Ethereum network.Ethereum is the pioneer for blockchain based smart contracts. When running on the blockchain a smart contract becomes like a self-operating computer program that automatically executes when specific conditions are met. On the blockchain, smart contracts allow for code to be run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference. It can facilitate the exchange of money, content, property, shares, or anything of value. The Ethereum network went live on July 30th, 2015 with 72 million Ethereum premined.',
        'notice': null,
        'date_added': '2015-08-07T00:00:00.000Z',
        'tags': [
          'mineable'
        ],
        'platform': null,
        'category': 'coin'
      }
    },
    'status': {
      'timestamp': '2019-07-26T17:29:09.251Z',
      'error_code': 0,
      'error_message': '',
      'elapsed': 10,
      'credit_count': 1
    }
  }
}
