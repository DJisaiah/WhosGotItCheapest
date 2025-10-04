'use client'

import { ChakraProvider, defaultSystem, createSystem, defineConfig, defaultConfig } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'
import '@fontsource/inter'; 
import '@fontsource/inter/700.css'; 
import '@fontsource/inter/900.css'; 

const config = defineConfig({
  globalCss: {
    "html": {
      color: 'black',
      background: 'white',
      fontFamily: 'Inter'
    }
  }
});

const config3 = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#0FEE0F" },
        secondary: { value: "#EE0F0F" },
      },
      fonts: {
        root: { value: "Inter, Inter" },
      },
      background: {
        primary: { value: "#00000" }
      }
    },
  },
  strictTokens: true,
  cssVarsRoot: ":where(:root, :host)",
  disableStyleInjection: false,
  colorModeConfig: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
})

const system = createSystem(defaultConfig, config)

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
