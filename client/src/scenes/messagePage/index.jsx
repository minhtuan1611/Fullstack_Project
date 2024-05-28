import { Box } from '@mui/material'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import Navbar from 'scenes/navbar'
import { useSelector } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from 'theme'

const Home = () => {
  const mode = useSelector((state) => state.mode)
  const theme = createTheme(themeSettings(mode))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Navbar />
        <div className="chat-app">
          <div className="container">
            <Sidebar />
            <MessageContainer />
          </div>
        </div>
      </Box>
    </ThemeProvider>
  )
}

export default Home
