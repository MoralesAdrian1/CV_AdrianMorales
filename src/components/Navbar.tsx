import * as React from 'react'
import {
  AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Button
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

const sections = [
  // { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education-and-badges', label: 'Education and Badges' },
  { id: 'contact', label: 'Contact' },
  { id: 'about', label: 'About' },
];


export default function Navbar() {
  
  const [active, setActive] = useState('about');

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget)

  const handleCloseNavMenu = () => setAnchorElNav(null)
  const handleSetActive = (id: string) => {
  setActive(id);
};

  
  


  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Desktop title */}
          <Typography
            variant="h6"
            color="secondary"
            noWrap
            sx={{
              ml: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
                        Software Engineer

          </Typography>

          {/* Mobile menu icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {sections.map((section) => (
                <MenuItem key={section.id} onClick={handleCloseNavMenu}>
  <ScrollLink
    to={section.id}
    smooth
    duration={500}
    offset={-70}
    spy={true} // <-- también aquí
    onSetActive={() => handleSetActive(section.id)}
    style={{ textDecoration: 'none', width: '100%' }}
  >
    <Typography
      textAlign="center"
      color={active === section.id ? 'secondary' : 'text.primary'}
    >
      {section.label}
    </Typography>
  </ScrollLink>
</MenuItem>

              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                <Button
                  color="secondary"
                  variant="contained"
                  fullWidth
                  sx={{ textTransform: 'none' }}
                  component="a"
                  href="/CV.pdf"
                  download="CV.pdf"
                >
                  Descargar CV
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          {/* Mobile title */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            color="secondary"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            Software Engineer
          </Typography>

          {/* Desktop navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            {sections.map(({ id, label }) => (
<ScrollLink
  key={id}
  to={id}
  smooth
  duration={500}
  offset={-70}
  spy={true} // <-- este es el fix
  onSetActive={() => handleSetActive(id)}
>
  <Button
    sx={{ textTransform: 'none' }}
    color={active === id ? 'secondary' : 'inherit'}
  >
    {label}
  </Button>
</ScrollLink>

))}

            <Button
              color="secondary"
              variant="contained"
              component="a"
              href="/CV.pdf"
              download="CV.pdf"
              sx={{
                textTransform: 'none',
                borderRadius: '30px',
                px: 3,
                py: 1,
                whiteSpace: 'nowrap',
              }}
            >
              Descargar CV
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
