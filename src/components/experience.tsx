import { Card, CardContent, Typography, Box, Container, Divider } from "@mui/material";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiCplusplus } from "react-icons/si";
import { FaAws } from "react-icons/fa";

export default function Experience() {
  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h3" color="secondary" gutterBottom textAlign="center">
        Work Experience
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
          {/* CARD 1 */}
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
                  MANAGEMENT SYSTEM FOR LATAM AIRLINES 
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
                <Typography variant="subtitle2" gutterBottom color="gray">
                  Optimen | April 2024 - August 2024
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body2">
                      Full-Stack development of a system for managing the assignment of pilots to training simulators,
                      featuring a Gantt-style interface. The system was implemented using AWS services such as Cognito,
                      S3, and Amplify for authentication, storage, and application deployment.
                    </Typography>
                  </li>
                </ul>
                <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                  <FaReact size={28} color="#61DBFB" />
                  <SiNextdotjs size={28} color="white" />
                  <FaAws size={28} color="#FF9900" />
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* CARD 2 */}
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
                  SCHEDULE OPTIMIZATION TOOL
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
                <Typography variant="subtitle2" gutterBottom color="gray">
                  Optimen | April 2024 - May 2024
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body2">
                      Implementation of constraints in a system for automating and optimizing employee distribution in
                      the Bajío cluster, using algorithms such as Hill Climbing to achieve the best possible allocation
                      based on cost and efficiency criteria.
                    </Typography>
                  </li>
                </ul>
                <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                  <SiCplusplus size={28} color="#00599C" />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
