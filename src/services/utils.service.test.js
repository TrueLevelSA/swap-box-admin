import React from 'react'
import { ethers } from 'ethers'

import * as utils from './utils.service'

describe('formatCurrency', () => {
  const seed = [
    1,
    12398723897,
    '500000000000000000',
    '0988765432'
  ]

  it('returns a commified value', () => {
    seed.forEach((val) => {
      const wei = ethers.utils.bigNumberify(val)
      const formated = utils.formatCurrency(wei)
      expect(formated).toContain('.')
    })
  })

})
