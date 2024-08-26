import { useEffect } from 'react'

// keeping the bundle size small on initial page load
// instead of importing from: '@adobe/react-spectrum' -- Barrel files bad
// QUESTION: how can I know at any given time when I load the page if I have more packages loading in the network tab
// than I did before? On the server we should always keep a numerical record of the count from the most recent main build
import {Provider as ReactSpectrumProvider} from '@react-spectrum/provider';

import { useNavigate, useHref, Outlet, useLocation } from 'react-router-dom'
import reactSpectrumStyleVariables from '~/styles/react-spectrum-styles.module.css'

export default function Providers() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const abController = new AbortController()
    // https://developers.google.com/speed/docs/insights/v5/get-started#key\
    // https://developers.google.com/speed/docs/insights/v5/about

    // find a way to run this code in a ci run
    // async function doIt() {
    //   const apiKey = 'AIzaSyB5-dBZCjRdge1XkFC3EgYXcMbpwfADlaA'
    //   const url = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://developers.google.com')
    //   url.searchParams.set('key', apiKey)
    //   url.searchParams.set('category', 'PERFORMANCE')
    //   url.searchParams.set('fields', [
    //     'loadingExperience',
    //     'lighthouseResult'
    //   ].join(','))
    //   const response = await fetch(url.toString(), {
    //     signal: abController.signal
    //   })
    //   const json = await response.json()

    //   const cruxMetrics = {
    //     "First Contentful Paint": json.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category,
    //     "First Input Delay": json.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category
    //   };
    //   const lighthouse = json.lighthouseResult;
    //   const lighthouseMetrics = {
    //     'First Contentful Paint': lighthouse.audits['first-contentful-paint'].displayValue,
    //     'Speed Index': lighthouse.audits['speed-index'].displayValue,
    //     'Time To Interactive': lighthouse.audits['interactive'].displayValue,
    //     'First Meaningful Paint': lighthouse.audits['first-meaningful-paint'].displayValue,
    //   };
    //   console.log({
    //     cruxMetrics,
    //     lighthouseMetrics
    //   })
    // }

    // doIt();

    return () => abController.abort(`cancel lighthouse metric check for: ${location.pathname}`)
  }, [location.pathname])

  return (
    <ReactSpectrumProvider 
      theme={{
        global: reactSpectrumStyleVariables,
        dark: reactSpectrumStyleVariables,
        large: reactSpectrumStyleVariables,
        light: reactSpectrumStyleVariables,
        medium: reactSpectrumStyleVariables,
      }} 
      router={{ navigate, useHref }}
    >
      <Outlet />
    </ReactSpectrumProvider>
  )
}
