import { Container, Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";

const ContactMe: React.FC = () => {
  // State variables to hold form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can perform additional logic here, such as sending the data to a server or displaying a success message.
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5} mb={3}>
        <Typography variant="h4">Contact Me</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variant="outlined"
            required
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactMe;
