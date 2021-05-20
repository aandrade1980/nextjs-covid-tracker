import { ChakraProvider } from '@chakra-ui/react';

export function reportWebVitals(metric) {
  if (metric.label === 'custom') {
    console.log(metric);
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
