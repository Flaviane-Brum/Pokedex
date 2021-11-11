import { createGlobalStyle, keyframes } from "styled-components";

const SlideRight = keyframes`
 0% {
    -webkit-transform: rotate3d(1, 1, 0, 0deg);
            transform: rotate3d(1, 1, 0, 0deg);
  }
  100% {
    -webkit-transform: rotate3d(1, 1, 0, 180deg);
            transform: rotate3d(1, 1, 0, 180deg);
  }

`;

const SlideDown = keyframes`
  0% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
  }


`;
const Rotate = keyframes`
0% {
    -webkit-transform: rotate(-540deg) scale(0);
            transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
    opacity: 1;
  }
`;

const GlobalStyle = createGlobalStyle`
:root {
 
  --type-first: 'Poppins', sans-serif;
  --type-second: Arial, Helvetica, sans-serif;
}
*, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
body,html {
  color: #333;
  background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%);

  font-family: var(--type-second);
  -webkit-font-smoothing: antialiased;
}
h1,
h2,
h3,
h4 {
  margin: 0;
  font-family: var(--type-first);
}
p {
  margin: 0;
  font-family: var(--type-second);

}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  font-size: 1rem;
  font-family: var(--type-second);

}
img {
  display: block;
  max-width: 100%;
}
button,
input {
  display: block;
  font-size: 1rem;
  font-family: var(--type-second);

  color: #333;
}

  .green{
    background-color: #98D7A5;
    color: #135848;
  
  }
  .red{
    background-color:lightsalmon;
    color: #7c2300;
  }
  .blue{
 background-color:#B0E0E6;
 color: #112022;
  }
  .yellow{  
 background-color:#ffff99;
 color:#764701;

  }
  .white{
   background-color:#f2f2f2;   
   color: #636363;
    }
    .brown{
      background-color:#ffcc99;
      color:#562a00;
    }
    .purple{
      background-color:#D8BFD8;
      color: #673f67;
    }
    .pink{
      background-color:#FFC0CB;
      color: #5e0011;
    }
    .gray{
      background-color:#DCDCDC;
      color: #252525;
    }
    .black{
      background: #707070;
    }
      /* animations */
    
.slide-down {
	-webkit-animation: ${SlideDown}  0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)  both;
	        animation:${SlideDown}  0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)  both;
}

.slide-right{
  -webkit-animation: ${SlideRight} .4s cubic-bezier(0.455, 0.030, 0.515, 0.955)reverse both;
	        animation: ${SlideRight} .4s cubic-bezier(0.455, 0.030, 0.515, 0.955) reverse both;

}

.rotate1{
  -webkit-animation: ${Rotate}  1s ease-out both;
	        animation: ${Rotate}  1s ease-out both;
transition: animation 1s;

}
.rotate2{
  -webkit-animation: ${Rotate}  .8s ease-out both;
	        animation: ${Rotate}  .8s 0.5s ease-out both;
transition: animation .8s;
}
.rotate3{
  -webkit-animation: ${Rotate}  .6s ease-out both;
	        animation: ${Rotate}  .6s  ease-out both;
transition: animation .6s;
}

.rotate4{
  -webkit-animation: ${Rotate}  .4s ease-out both;
	        animation: ${Rotate}  .4s  ease-out both;
transition: animation .4s;
}


`;

export default GlobalStyle;
