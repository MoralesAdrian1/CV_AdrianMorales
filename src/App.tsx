import { Button, Divider, Typography } from '@mui/material';
import { Element } from 'react-scroll'
import Proyectos from './components/Proyectos';
import AboutMe from './components/me';
import Experience from './components/experience';
import Skills from './components/skills';
import Badges from './components/education';
import Contact from './components/contact';
function App() {
  return (
    <>
    <Element name='about'><AboutMe/> </Element>
    <Divider
  sx={{
    my: 4,
    height: 2, // Más ancho
    bgcolor: '#1e1e1e',
    borderRadius: 2,
    boxShadow: '0px 2px 8px rgba(0,0,0,0.3)',
  }}
/>

    {/* <Element name='projects'><Proyectos/> </Element> */}
    <Element name='experience'><Experience/> </Element>
        <Divider
  sx={{
    my: 4,
    height: 2, // Más ancho
    bgcolor: '#1e1e1e',
    borderRadius: 2,
    boxShadow: '0px 2px 8px rgba(0,0,0,0.3)',
  }}
/>
    <Element name='skills'><Skills/> </Element>
        <Divider
  sx={{
    my: 4,
    height: 2, // Más ancho
    bgcolor: '#1e1e1e',
    borderRadius: 2,
    boxShadow: '0px 2px 8px rgba(0,0,0,0.3)',
  }}
/>
    <Element name="education-and-badges"><Badges/></Element>
        <Divider
  sx={{
    my: 4,
    height: 2, // Más ancho
    bgcolor: '#1e1e1e',
    borderRadius: 2,
    boxShadow: '0px 2px 8px rgba(0,0,0,0.3)',
  }}
/>
    <Element name='contact'><Contact/> </Element>



    </>
  );
}

export default App;
