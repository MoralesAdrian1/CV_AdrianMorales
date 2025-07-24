import {
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Divider,
} from "@mui/material";

export default function Badges() {
  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h3" color="secondary" gutterBottom textAlign="center">
        Certifications & Education
      </Typography>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          {/* CERTIFICATIONS */}
          <Box
            sx={{
              flex: { xs: "100%", md: "48%" },
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          >
            <Card sx={{ backgroundColor: "#1e1e1e", color: "white", height: "100%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  CERTIFICATIONS
                </Typography>
                <Divider
                  sx={{
                    my: 2,
                    height: 2,
                    bgcolor: "secondary.main",
                    borderRadius: 2,
                    boxShadow: "0px 2px 8px rgba(0,0,0,0.3)",
                  }}
                />
                <ul>
                  <li><Typography variant="body2">Fundamentos de Redes – Cisco (2023)</Typography></li>
                  <li><Typography variant="body2">NDG Linux Essentials – Cisco (2023)</Typography></li>
                  <li><Typography variant="body2">Microsoft Word 2019 – Testing Program (2022)</Typography></li>
                </ul>

                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                  COURSES
                </Typography>
               <Divider
                  sx={{
                    my: 2,
                    height: 2,
                    bgcolor: "secondary.main",
                    borderRadius: 2,
                    boxShadow: "0px 2px 8px rgba(0,0,0,0.3)",
                  }}
                />
                <ul>
                  <li><Typography variant="body2">Introducción a la Ciberseguridad – Cisco (2024)</Typography></li>
                  <li><Typography variant="body2">Cloud Practitioner – AWS Cloud Quest (2024)</Typography></li>
                  <li><Typography variant="body2">Software y Cómputo en la Nube – Optimen (2023)</Typography></li>
                  <li><Typography variant="body2">JavaScript Essentials 1 – Cisco (2022)</Typography></li>
                  <li><Typography variant="body2">PCAP - Python – Cisco (2022)</Typography></li>
                  <li><Typography variant="body2">CLA - C – Cisco (2022)</Typography></li>
                  <li><Typography variant="body2">IT Essentials – Cisco (2022)</Typography></li>
                </ul>
              </CardContent>
            </Card>
          </Box>

          {/* EDUCATION */}
          <Box
            sx={{
              flex: { xs: "100%", md: "48%" },
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          >
            <Card sx={{ backgroundColor: "#1e1e1e", color: "white", height: "100%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  EDUCATION
                </Typography>
                <Divider
                  sx={{
                    my: 2,
                    height: 2,
                    bgcolor: "secondary.main",
                    borderRadius: 2,
                    boxShadow: "0px 2px 8px rgba(0,0,0,0.3)",
                  }}
                />
                <Typography variant="subtitle2"  gutterBottom>
                  Universidad Tecnológica del Norte de Guanajuato
                </Typography>
                <Typography variant="body2">
                  2024 - Actualidad<br />
                  Ingeniería en Desarrollo y Gestión de Software
                </Typography>

                <Divider sx={{ my: 3, bgcolor: "gray" }} />

                <Typography variant="subtitle2"  gutterBottom>
                  Universidad Tecnológica del Norte de Guanajuato
                </Typography>
                <Typography variant="body2">
                  2022 - 2024<br />
                  TSU en Desarrollo de Software Multiplataforma
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
