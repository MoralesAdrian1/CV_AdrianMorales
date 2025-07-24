import {
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Divider,
} from "@mui/material";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiCplusplus, SiMongodb, SiPostgresql, SiTypescript, SiPython, SiJavascript, SiAngular } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
export default function Skills() {
  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h3" color="secondary" gutterBottom textAlign="center">
        Skills
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
          {/* TECHNICAL SKILLS */}
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
                  TECHNICAL SKILLS
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

                <Typography variant="subtitle2" color="secondary" gutterBottom>
                  Programming Languages:
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Java, JavaScript, TypeScript, Python, C++
                </Typography>

                <Typography variant="subtitle2" color="secondary" gutterBottom>
                  Databases:
                </Typography>
                <Typography variant="body2" gutterBottom>
                  MongoDB, DynamoDB, SQL Server, PostgreSQL
                </Typography>

                <Typography variant="subtitle2" color="secondary" gutterBottom>
                  AWS Services:
                </Typography>
                <Typography variant="body2"  gutterBottom>
                  Amplify, Cognito, S3
                </Typography>

                <Typography variant="subtitle2" color="secondary" gutterBottom>
                  Frameworks:
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Angular, React, Next.js
                </Typography>

                <Typography variant="subtitle2" color="secondary" gutterBottom>
                  Other Technologies:
                </Typography>
                <Typography variant="body2">
                  Mendix, Node.js, Python with Pandas, OpenRefine, Node-RED (IoT)
                </Typography>

                <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
                  <FaJava size={24} color="#f89820" />
                  <SiJavascript size={24} color="#f0db4f" />
                  <SiTypescript size={24} color="#3178c6" />
                  <SiPython size={24} color="#306998" />
                  <SiCplusplus size={24} color="#00599C" />
                  <SiMongodb size={24} color="#4db33d" />
                  <SiPostgresql size={24} color="#336791" />
                  <FaAws size={24} color="#FF9900" />
                  <SiAngular size={24} color="#dd1b16" />
                  <FaReact size={24} color="#61DBFB" />
                  <SiNextdotjs size={24} color="white" />
                  <FaNodeJs size={24} color="#68a063" />
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* SOFT SKILLS & LANGUAGES */}
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
                  SOFT SKILLS
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
                  <li><Typography variant="body2">Leadership</Typography></li>
                  <li><Typography variant="body2">Assertive communication</Typography></li>
                  <li><Typography variant="body2">Proactive attitude</Typography></li>
                  <li><Typography variant="body2">Problem-solving</Typography></li>
                  <li><Typography variant="body2">Teamwork</Typography></li>
                </ul>

                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                  LANGUAGES
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
                <Typography variant="body2">English – B1</Typography>
                <Typography variant="body2">Spanish – Native</Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
