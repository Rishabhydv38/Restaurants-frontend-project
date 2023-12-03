
import React from "react";
import Layout from "./../components/Layout/Layout";
import { MenuList } from "../data/award";
import "../styles/HomeStyles.css";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h3">Welcome To My Resturant</Typography>
        <Typography variant="h4">AWARDS</Typography>
       
         
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
        
        <br />
        <Typography variant="h4">Ambiance</Typography>
        <h5> Epicurean Symphony offers a sophisticated and cozy ambiance, with contemporary decor and soft lighting, creating the perfect setting for an unforgettable dining experience."</h5>
      </Box>
    </Layout>
  );
};

export default About;

// "sustainability": {
//   "initiatives": [
//     {
//       "name": "Farm-to-Table",
//       "description": "We source our ingredients locally to support farmers and ensure the freshest, seasonal produce in our dishes."
//     },
//     {
//       "name": "Waste Reduction",
//       "description": "We prioritize reducing food waste through careful portioning, composting, and recycling practices."
//     },
//     {
//       "name": "Ocean-Friendly Seafood",
//       "description": "We are committed to serving sustainably sourced seafood to promote the health of our oceans and marine life."
//     }
//   ]
// },