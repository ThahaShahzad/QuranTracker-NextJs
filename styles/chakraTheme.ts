import { ComponentStyleConfig, extendTheme, ThemeOverride, withDefaultColorScheme } from '@chakra-ui/react'
import { mode, createBreakpoints } from '@chakra-ui/theme-tools'

const Heading: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: ({ colorMode }) => ({
    color: colorMode === 'light' ? 'primary.light' : 'primary.dark',
    margin: 0
  }),
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {
    size: '2xl',
    variant: ''
  }
}
const Text: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    margin: 0
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      fontSize: ['.5rem', '.75rem']
    },
    md: {
      fontSize: ['1.125rem', '1.25rem'],
      fontWeight: 'normal'
    },
    lg: {
      fontSize: ['1.25rem', '1.5rem'],
      fontWeight: 'semibold'
    }
  },
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {
    size: 'md',
    variant: ''
  }
}
const Link: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    margin: 0,
    textDecoration: 'inherit',
    _hover: {
      textDecoration: 'none'
    }
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      fontSize: ['.5rem', '.75rem']
    },
    md: {
      fontSize: ['1.125rem', '1.125rem'],
      fontWeight: 'normal'
    },
    lg: {
      fontSize: ['1.25rem', '1.5rem'],
      fontWeight: 'semibold'
    }
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    line: {
      _hover: {
        borderBottom: '2px',
        border: 'gray.200'
      }
    }
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: 'md',
    variant: ''
  }
}
const Input: ComponentStyleConfig = {
  variants: {
    outline: {
      field: {
        _focus: {
          zIndex: 1,
          borderColor: '#76dbd1',
          boxShadow: '0 0 0 1px #76dbd1'
        }
      }
    }
  }
}
const Select: ComponentStyleConfig = {
  variants: {
    outline: {
      field: {
        _focus: {
          zIndex: 1,
          borderColor: '#76dbd1',
          boxShadow: '0 0 0 1px #76dbd1'
        }
      }
    }
  }
}
const breakpoints = createBreakpoints({
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536'
})

const overrides: ThemeOverride = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  fonts: {
    body: 'Alaska'
  },
  colors: {
    primary: {
      50: '#e1f9f7',
      100: '#c5e7e1',
      200: '#a8d5cc',
      300: '#87c3b8',
      400: '#67b1a4',
      500: '#4e988a',
      600: '#3a766c',
      700: '#27554d',
      800: '#12342e',
      900: '#00140e',
      light: '#57a99a',
      dark: '#76dbd1'
    },
    'bg-light': {
      light: '#d1d6d6fb',
      dark: '#38474b'
    },
    bg: {
      light: '#f3f8f7',
      dark: '#0d1f23'
    }
  },
  breakpoints,
  styles: {
    global: (props) => ({
      body: {
        m: 0,
        minH: '100vh',
        display: 'grid',
        gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
        color: mode('#0d1f23', '#f3f8f7')(props),
        bg: mode('#f3f8f7', '#0d1f23')(props)
      }
    })
  },
  components: {
    Text,
    Heading,
    Link,
    Input,
    Select
  }
}

const theme = extendTheme(
  overrides,
  withDefaultColorScheme({
    colorScheme: 'primary'
  })
)
export default theme
