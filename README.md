# rollup-plugin-env

Injects environment variables


## Installation

```
npm i -D @tadashi/rollup-plugin-env
```


## Usage

```js
import {rollup} from 'rollup'
import envs from 'rollup-plugin-env'

const {
	SERVICE_API_ENDPOINT,
	VERSION
} = process.env

rollup({
  entry: 'src/index.js',
  plugins: [
    envs(APP_NAMESPACE, {
      SERVICE_API_ENDPOINT,
      VERSION
    })
  ]
}).then(/* ... */)
```


## License

MIT
