# rollup-plugin-env

Injects environment variables


## Install

```
npm i -D @tadashi/rollup-plugin-env
```


## Usage

```js
import envs from '@tadashi/rollup-plugin-env'
import {rollup} from 'rollup'

const {
  ENDPOINT,
  VERSION
} = process.env

rollup({
  entry: 'src/index.js',
  plugins: [
    envs(APP_NAMESPACE, {
      ENDPOINT,
      VERSION
    })
  ]
}).then(/* ... */)
```


## License

MIT
