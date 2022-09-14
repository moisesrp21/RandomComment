// import '../styles/globals.css'
import {ChakraProvider, extendTheme, RangeSliderThumb} from '@chakra-ui/react'

const colors = {
  main: {
    BG: '#272a35',
    buttonGreenBG: '#00a971',
    buttonRedBG: '#ffc0c7',
    lightText: '#f1f1f1',
    darkText: '#272a35',
    commentBG: '#181818',
    commentText: '#ffffff',
    commentInfoText: '#929292'
  }
}
const styles = {
  global: {
    body: {
      bg: '#272a35',
      color: '#f1f1f1',
      width: '100vw',
      height: '100vh',
    }
  }
}


const theme = extendTheme({ styles,colors})



function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme= {theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
