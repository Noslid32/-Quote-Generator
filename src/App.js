import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const quotes = [
  {
    text: "Los caminos difíciles llevan a destinos maravillosos.",
    author: "Miguel Ángel Asturias",
  },
  {
    text: "La lógica te llevará de A a B. La imaginación te llevará a todas partes.",
    author: "Albert Einstein",
  },
  {
    text: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    author: "Robert Collier",
  },
  {
    text: "No cuentes los días, haz que los días cuenten.",
    author: "Muhammad Ali",
  },
];

const StoicQuotesGenerator = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    const interval = setInterval(getRandomQuote, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Stoic Quotes Generator
      </Typography>
      <Card elevation={3} style={{ padding: "20px", borderRadius: "10px" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            "{quote.text}"
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            - {quote.author}
          </Typography>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        color="primary"
        startIcon={<RefreshIcon />}
        onClick={getRandomQuote}
        style={{ marginTop: "20px" }}
      >
        NEW QUOTE
      </Button>
    </Container>
  );
};

export default StoicQuotesGenerator;
