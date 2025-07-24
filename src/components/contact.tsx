import { Box, Typography, IconButton, Container } from "@mui/material";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#121212",
        color: "white",
        py: 4,
        mt: 8,
        borderTop: "1px solid #333",
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="h3" color="secondary" gutterBottom>
          Contact Me
        </Typography>

        {/* Correo y Teléfono con texto */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 4,
            mb: 3,
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FaEnvelope size={20} />
            <Typography variant="body1">adriangtoff@gmail.com</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FaPhone size={20} />
            <Typography variant="body1">+52 418 105 6124</Typography>
          </Box>
        </Box>

        {/* Íconos de redes */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 2 }}>
          <IconButton
            component="a"
            href="https://github.com/MoralesAdrian1"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <FaGithub size={24} />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/adrian-morales-a49bb12b8/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <FaLinkedin size={24} />
          </IconButton>
        </Box>

        <Typography variant="body2" color="gray">
          &copy; {new Date().getFullYear()} Adrian Morales. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
