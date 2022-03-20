import { Chain } from '../../constants'

export const Fuji: Chain = {
  chainId: 43113,
  chainName: 'Fuji',
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0xccc75e78Dce6A20bCCa3a30deB23Cb4D23df993a',
  getExplorerAddressLink: (address: string) => `https://testnet.snowtrace.io/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) => `https://testnet.snowtrace.io/tx/${transactionHash}`,
}

export default { Fuji }
