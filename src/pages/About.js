import React from "react";
import Layout from "./../components/Layout/Layout";
import {Box} from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{my:5,textAlign: "center", p:1,h1:{ fontWeight: "bold",my:4,fontSize: "60px"},
      h2:{ fontWeight: "bold",my:4,fontSize: "50px" ,color:"green",marginTop:"-10px"},
          "& p": { textAlign: "justify", fontSize:"20px",},
          "& span ":{  fontSize:"25px", fontWeight:"bold", color:"orangered",}
       
        }}>

        <h1>Welcome to <span style={{fontSize:"60px",color:"red"}}> Sri</span> restaurant </h1> <br/>
        <h2 >South  indian dish</h2> <br/>
      

        <p>South Indian cuisine is diverse and known for its use of rice, lentils, coconut, and a variety of spices. Here are some popular South Indian dishes: </p><br/>  
        <p> <span>Dhosa</span>:-  Thin, crispy pancakes made from fermented rice and lentil batter. They can be served plain or stuffed with fillings like spiced potatoes masala dosa.</p><br/><br/>
        <p><span> Idli</span>:- Soft, steamed rice cakes made from a similar batter as dosa, also typically served with sambar and chutney. <br/><br/><br/></p>
        <p><span> Sambhar</span>:- A flavorful and tangy lentil-based vegetable stew, often made with tamarind, sambar powder, and a variety of vegetables.  </p><br/><br/>
        <p><span> Rasam</span>:- A spicy and tangy soup made with tamarind juice, tomatoes, and aromatic spices like cumin, pepper, and coriander. </p><br/><br/>       
        <p><span>Uttapam</span>:- A thicker pancake-like dish made from the same batter as dosa, but with added vegetables like onions, tomatoes, and peppers cooked into the batter.</p><br/><br/>
        <p><span>Biryani</span>:- A fragrant rice dish cooked with aromatic spices, typically layered with marinated meat (chicken, mutton, or fish) or vegetables.</p><br/><br/>
        <p><span>Pongal</span>:- A savory rice and lentil dish cooked with ghee, black pepper, and cumin seeds, often served with a side of sambar and coconut chutney.</p><br/><br/>
       <p><span>Vada</span>:-Deep-fried savory doughnuts made from a mixture of lentils and spices, usually served with sambar or coconut chutney.</p><br/>


      </Box>
    </Layout>
  );
};

export default About;
