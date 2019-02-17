import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import renderReducer from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof renderReducer, 'function')
  },
  async 'calls package without error'() {
    await renderReducer()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await renderReducer({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T