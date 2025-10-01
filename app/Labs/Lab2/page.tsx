import { Container } from "react-bootstrap";
import BackgroundColors from "./BackgroundColors";
import Border from "./Borders";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import ForegroundColors from "./ForegroundColors";
import GridLayout from "./GridLayout";
import "./index.css";
import Margins from "./Margins";
import Padding from "./Padding";
import Position from "./Positions";
export default function Lab2() {
    return (
      <Container>
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <GridLayout />
      <Position />
      <Dimensions />
      <h3>Styling with the STYLE attribute</h3>
      <p style={{color: "white", backgroundColor: "blue"}}  >
        Style attribute allows configuring look and feel
        right on the element. Although it&apos;s very convenient
        it is considered bad practice and you should avoid
        using the style attribute
      </p>
      <ForegroundColors />
      <BackgroundColors />  
      <Border />
      <Padding />
   <Margins />
   <Corners />
    </div>
    </Container>
    )
}