import { expect } from 'chai'
import { TEST_ADDRESS, TEST_TX } from './test-defaults'
import { Fuji } from '../../../src'

describe('Fuji Chain', () => {
  it('getChainId', () => {
    expect(Fuji.chainId).to.equal(43113)
  })

  it('getChainName', () => {
    expect(Fuji.chainName).to.eq('Fuji')
  })

  it('isTestChain', () => {
    expect(Fuji.isTestChain).to.be.true
  })

  it('isLocalChain', () => {
    expect(Fuji.isLocalChain).to.be.false
  })

  it('getExplorerAddressLink', () => {
    expect(Fuji.getExplorerAddressLink(TEST_ADDRESS)).to.eq(`https://testnet.snowtrace.io/address/${TEST_ADDRESS}`)
  })

  it('getExplorerTransactionLink', () => {
    expect(Fuji.getExplorerTransactionLink(TEST_TX)).to.eq(`https://testnet.snowtrace.io/tx/${TEST_TX}`)
  })
})
