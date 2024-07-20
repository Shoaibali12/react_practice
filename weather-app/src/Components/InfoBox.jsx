import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const img_url =
    "https://images.unsplash.com/photo-1561471026-0bbb77535d25?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <div className="infoBox">
        <h1>About Weather</h1>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={img_url}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"div"}
            >
              <p>Temprature = {info.temp}&deg;C</p>
              <p>Max Temprature = {info.tempMax}&deg;C</p>
              <p>Min Temprature = {info.tempMin}&deg;C</p>
              <p>Humidity = {info.humidity}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
