import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, children }) => (
  <>
    <Typography variant="h5" gutterBottom component="div">
      {title}
    </Typography>
    <Divider />
    {children}
  </>
);

interface ResumeItemProps {
  primary: string;
  secondary: string;
}

const ResumeItem: React.FC<ResumeItemProps> = ({ primary, secondary }) => (
  <ListItem>
    <ListItemText primary={primary} secondary={secondary} />
  </ListItem>
);

interface Experience {
  role: string;
  company: string;
  duration: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface ResumeTemplateProps {
  name: string;
  title: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
}

const ResumeTemplate: React.FC<ResumeTemplateProps> = ({
  name,
  title,
  experience,
  education,
  skills,
}) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle1">{title}</Typography>
      </Grid>

      <Grid item xs={12}>
        <ResumeSection title="Experience">
          <List>
            {experience.map((item, index) => (
              <ResumeItem
                key={index}
                primary={item.role}
                secondary={`${item.company}, ${item.duration}`}
              />
            ))}
          </List>
        </ResumeSection>
      </Grid>

      <Grid item xs={12}>
        <ResumeSection title="Education">
          <List>
            {education.map((item, index) => (
              <ResumeItem
                key={index}
                primary={item.degree}
                secondary={`${item.institution}, ${item.year}`}
              />
            ))}
          </List>
        </ResumeSection>
      </Grid>

      <Grid item xs={12}>
        <ResumeSection title="Skills">
          <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
            {skills.map((skill, index) => (
              <Box
                key={index}
                component="span"
                sx={{ border: 1, borderRadius: "4px", padding: 1 }}
              >
                {skill}
              </Box>
            ))}
          </Box>
        </ResumeSection>
      </Grid>
    </Grid>
  );
};

// Example usage of ResumeTemplate component with TypeScript
const Resume: React.FC = () => {
  const resume = {
    name: "Corey Fitzpatrick",
    title: "Software Engineer",
    experience: [
      {
        role: "Person",
        company: "United States",
        duration: "June 1988 - Present",
      },
    ],
    education: [
      {
        degree: "B.Sc. Computer Science",
        institution: "Fairmont State University",
        year: "2019 - 2022",
      },
    ],
    skills: ["Various"],
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#189ab4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 960,
          width: "100%",
          p: 2,
          margin: "auto",
          bgcolor: "#75E6DA",
        }}
      >
        <ResumeTemplate {...resume} />
      </Paper>
    </Box>
  );
};

export default Resume;
