import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {Table,TableBody,TableCell,TableHead,TableRow,} from "@mui/material";



const Contact = () => {
  return (
    <Layout>
      <div>
        <h1 style={{paddingTop:"70px",textAlign:"center"}}>Contact Sri Resturant</h1><br/>
        <p style={{paddingLeft:"50px"}}>
        I'd love to help you find restaurant contacts! However, I'll need more specific information to assist better. Could you please provide the Sri restaurant contact  located at Chennai tamilnadu...</p>
      </div>
      <div style={{width:"900px", paddingTop:"100px",paddingLeft:"300px"}}>
      
        <div >
          <Table aria-label="contact table">
            <TableHead>
                <TableCell style={{ backgroundColor: "black", color: "white" , textAlign:"center" }}>
                Contact Details
                </TableCell>
            </TableHead>
            
            <TableBody>
 
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000  (tollfree)
                </TableCell>
            
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> sriannamalai2003@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} />9345628924
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
  
    </Layout>
  );
};

export default Contact;
