# Important details

## Bundle Size Optimization and Monitoring

* Maintain small initial page load bundle size by **avoiding** barrel files, and instead use direct imports when possible.

```
  // Only import what you need ✅
  import {Provider} from '@react-spectrum/provider';

  -- -- -- --

  // This will import all exports from this library ❌ 
  import {Provider as ReactSpectrumProvider} from '@adobe/react-spectrum';
```

In Firefox you can see a nice view of page performance. Just by importing the the Provider only from it's direct package we shaved the bundle size by 1/3. As of 08-18-2024, 30:106 total requests

**TODO:** Implement dev mode in page tracking to get insights on total requests and if that varies from the baseline - the amount of total requests from the previous main build.