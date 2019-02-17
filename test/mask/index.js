import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import renderReducer from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await renderReducer({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts
