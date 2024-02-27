import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {Box,Card,CardMedia, Typography,} from "@mui/material";

function Menu(){
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 8 , borderRadius:"10px",}}>
            <div>
              <CardMedia
                style={{height: "400px" }}component={"img"}src={menu.image}/>
              <div>
                <Typography variant="h5"> {menu.name}</Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </div>
            </div>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
