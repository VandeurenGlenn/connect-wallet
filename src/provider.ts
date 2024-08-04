import chainMap from 'chainmap'
import { ChainInfo } from './types.js'
import { JsonRpcProvider, ContractRunner, EventEmitterable } from 'ethers'
import { ProviderEvent } from 'ethers'
import { NameResolver } from 'ethers'

export default class Provider implements ContractRunner, EventEmitterable<ProviderEvent>, NameResolver {
  chainInfo: ChainInfo
  providers: JsonRpcProvider[]

  constructor(chainId) {
    // super()
    this.chainInfo = chainMap[chainId]

    this.providers = []
    for (const url of this.chainInfo.rpc) {
      this.providers.push(new JsonRpcProvider(url, this.chainInfo))
    }
  }

  #getBalance(address) {
    if (this.providers.length > 0) {
      try {
        const balance = this.providers[0].getBalance(address)
        return balance
      } catch {
        this.providers.shift()
        return this.#getBalance(address)
      }
    }
  }

  getBalance(address) {
    return this.#getBalance(address)
    // console.log(this.provider.)
  }
  #send(method, params) {
    if (this.providers.length > 0) {
      try {
        const balance = this.providers[0].send(method, params)
        return balance
      } catch {
        this.providers.shift()
        return this.#send(method, params)
      }
    }
  }

  send(method, params) {
    return this.#send(method, params)
  }

  #call(tx) {
    if (this.providers.length > 0) {
      try {
        return this.providers[0].call(tx)
      } catch {
        this.providers.shift()
        return this.#call(tx)
      }
    }
  }

  call(tx) {
    console.log(tx)

    return this.#call(tx)
  }

  provider() {
    return this.providers[0]
  }

  #estimateGas(tx) {
    if (this.providers.length > 0) {
      try {
        return this.providers[0].estimateGas(tx)
      } catch {
        this.providers.shift()
        return this.#estimateGas(tx)
      }
    }
  }

  estimateGas(tx) {
    return this.#estimateGas(tx)
  }

  #getBlockNumber() {
    if (this.providers.length > 0) {
      try {
        return this.providers[0].getBlockNumber()
      } catch {
        this.providers.shift()
        return this.#getBlockNumber()
      }
    }
  }

  getBlockNumber() {
    return this.#getBlockNumber()
  }

  #getNetwork() {
    if (this.providers.length > 0) {
      try {
        return this.providers[0].getNetwork()
      } catch {
        this.providers.shift()
        return this.#getNetwork()
      }
    }
  }

  getNetwork() {
    return this.#getNetwork()
  }

  #resolveName(name) {
    if (this.providers.length > 0) {
      try {
        return this.providers[0].resolveName(name)
      } catch {
        this.providers.shift()
        return this.#resolveName(name)
      }
    }
  }

  resolveName(name) {
    return this.#resolveName(name)
  }

  #getFeeData() {
    if (this.providers.length > 0) {
      try {
        return this.providers[0].getFeeData()
      } catch {
        this.providers.shift()
        return this.#getFeeData()
      }
    }
  }

  getFeeData() {
    return this.#getFeeData()
  }

  #getTransactionCount(address) {
    if (this.providers.length > 0) {
      try {
        return this.providers[0].getTransactionCount(address)
      } catch {
        this.providers.shift()
        return this.#getTransactionCount(address)
      }
    }
  }

  getTransactionCount(address) {
    return this.#getTransactionCount(address)
  }

  #getCode(address) {
    if (this.providers.length > 0) {
      try {
        return this.providers[0].getCode(address)
      } catch {
        this.providers.shift()
        return this.#getCode(address)
      }
    }
  }

  getCode(address) {
    return this.#getCode(address)
  }

  #getStorage(address, position, block?) {
    if (this.providers.length > 0) {
      try {
        return this.providers[0].getStorage(address, position, block)
      } catch {
        this.providers.shift()
        return this.#getStorage(address, position, block)
      }
    }
  }

  getStorage(address, position, block?) {
    return this.#getStorage(address, position, block)
  }

  async broadcastTransaction(tx) {
    if (this.providers.length > 0) {
      let result
      try {
        result = await this.providers[0].broadcastTransaction(tx)
      } catch {
        this.providers.shift()
        return this.broadcastTransaction(tx)
      }
      return result
    }
  }

  async getBlock(block) {
    if (this.providers.length > 0) {
      let result
      try {
        result = await this.providers[0].getBlock(block)
      } catch {
        this.providers.shift()
        return this.getBlock(block)
      }
      return result
    }
  }

  async getTransaction(hash) {
    if (this.providers.length > 0) {
      let result
      try {
        result = await this.providers[0].getTransaction(hash)
      } catch {
        this.providers.shift()
        return this.getTransaction(hash)
      }
      return result
    }
  }

  async getTransactionReceipt(hash) {
    if (this.providers.length > 0) {
      let result
      try {
        result = await this.providers[0].getTransactionReceipt(hash)
      } catch {
        this.providers.shift()
        return this.getTransactionReceipt(hash)
      }
      return result
    }
  }

  async getTransactionResult(hash) {
    if (this.providers.length > 0) {
      let result
      try {
        result = await this.providers[0].getTransactionResult(hash)
      } catch {
        this.providers.shift()
        return this.getTransactionResult(hash)
      }
      return result
    }
  }

  async getLogs(filter) {
    if (this.providers.length > 0) {
      let result
      try {
        result = await this.providers[0].getLogs(filter)
      } catch {
        this.providers.shift()
        return this.getLogs(filter)
      }
      return result
    }
  }

  async lookupAddress(address) {
    if (this.providers.length > 0) {
      let result
      try {
        result = await this.providers[0].lookupAddress(address)
      } catch {
        this.providers.shift()
        return this.lookupAddress(address)
      }
      return result
    }
  }

  async waitForTransaction(hash, confirms, timeout) {
    if (this.providers.length > 0) {
      let result
      try {
        result = await this.providers[0].waitForTransaction(hash, confirms, timeout)
      } catch {
        this.providers.shift()
        return this.waitForTransaction(hash, confirms, timeout)
      }
      return result
    }
  }

  async waitForBlock(hash) {
    if (this.providers.length > 0) {
      let result
      try {
        result = await this.providers[0].waitForBlock(hash)
      } catch {
        this.providers.shift()
        return this.waitForBlock(hash)
      }
      return result
    }
  }

  async on(event, listener) {
    if (this.providers.length > 0) {
      let result
      try {
        result = await this.providers[0].on(event, listener)
      } catch {
        this.providers.shift()
        return this.on(event, listener)
      }
      return result
    }
  }

  async once(event, listener) {
    if (this.providers.length > 0) {
      let result
      try {
        result = await this.providers[0].once(event, listener)
      } catch {
        this.providers.shift()
        return this.once(event, listener)
      }
      return result
    }
  }

  async emit(event, value) {
    if (this.providers.length > 0) {
      let result
      try {
        result = await this.providers[0].emit(event, value)
      } catch {
        this.providers.shift()
        return this.emit(event, value)
      }
      return result
    }
  }

  async listenerCount(event) {
    if (this.providers.length > 0) {
      let result
      try {
        result = await this.providers[0].listenerCount(event)
      } catch {
        this.providers.shift()
        return this.listenerCount(event)
      }
      return result
    }
  }

  async listeners(event) {
    if (this.providers.length > 0) {
      let result
      try {
        result = await this.providers[0].listeners(event)
      } catch {
        this.providers.shift()
        return this.listeners(event)
      }
      return result
    }
  }
  async off(event) {
    if (this.providers.length > 0) {
      let result
      try {
        result = await this.providers[0].off(event)
      } catch {
        this.providers.shift()
        return this.off(event)
      }
      return result
    }
  }

  async removeAllListeners(event) {
    if (this.providers.length > 0) {
      let result
      try {
        result = await this.providers[0].removeAllListeners(event)
      } catch {
        this.providers.shift()
        return this.removeAllListeners(event)
      }
      return result
    }
  }

  async removeListener(event, listener) {
    if (this.providers.length > 0) {
      let result
      try {
        result = await this.providers[0].removeListener(event, listener)
      } catch {
        this.providers.shift()
        return this.removeListener(event, listener)
      }
      return result
    }
  }

  async addListener(event, listener) {
    if (this.providers.length > 0) {
      let result
      try {
        result = await this.providers[0].addListener(event, listener)
      } catch {
        this.providers.shift()
        return this.addListener(event, listener)
      }
      return result
    }
  }

  destroy() {
    return this.providers[0].destroy()
  }
}
