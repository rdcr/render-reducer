/* yarn example/ */
import renderReducer from '../src'

(async () => {
  const res = await renderReducer({
    text: 'example',
  })
  console.log(res)
})()