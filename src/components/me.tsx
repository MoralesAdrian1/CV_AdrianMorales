import { LinkedIn, WhatsApp } from "@mui/icons-material";
import { Avatar, Typography, Box, Button } from "@mui/material";

export default function AboutMe() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* Columna de texto */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            mb: { xs: 4, md: 0 },
            pr: { md: 4 },
          }}
        >
          <Typography variant="h4" color="secondary" gutterBottom>
            Hello I'm
          </Typography>
          <Typography variant="h2" color="white" gutterBottom>
            Adrian Morales López
          </Typography>
          <Typography variant="body1" color="gray">
            Software Development and Management Engineering student, with <br />
            skills in designing and developing technological solutions. Known <br />
            for a proactive attitude, continuous learning ability, and strong <br />
            teamwork skills.
          </Typography>
          <Typography variant="h6" color="white" gutterBottom sx={{ mt: 2 }}>
            Find me on:
          </Typography>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              gap: 2,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<WhatsApp />}
              href="https://wa.me/+524181056124"
              target="_blank"
            >
              WhatsApp
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<LinkedIn />}
              href="https://www.linkedin.com/in/adrian-morales-a49bb12b8/"
              target="_blank"
            >
              LinkedIn
            </Button>
          </Box>
        </Box>

        {/* Columna de avatar */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <Avatar
            alt="Adrian Morales"
            src="/ruta/a/tu/imagen.jpg"
            sx={{
              width: 200,
              height: 200,
              border: "5px solid",
              borderColor: "secondary.main",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
