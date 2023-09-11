import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";



const Particle = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      
        "fullScreen": {
          "zIndex": 1
        },
        "interactivity": {
          "events": {
            "onClick": {
              "enable": true,
              "mode": "push"
            },
            "onDiv": {
              "selectors": "#repulse-div",
              "mode": "repulse"
            },
            "onHover": {
              "enable": true,
              "mode": "connect",
              "parallax": {
                "force": 60
              }
            }
          },
          "modes": {
            "bubble": {
              "distance": 1000,
              "duration": 2,
              "opacity": 0.6,
              "size": 40
            },
            "grab": {
              "distance": 1000
            }
          }
        },
        "particles": {
          "color": {
            "value": "#0984e3"
          },
          "links": {
            "color": {
              "value": "#0984e3"
            },
            "distance": 1000,
            "opacity": 0.8
          },
          "move": {
            "attract": {
              "rotate": {
                "x": 600,
                "y": 1200
              }
            },
            "enable": true,
            "outModes": {
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            },
            "speed": 1
          },
          "number": {
            "density": {
              "enable": true
            },
            "limit": 250,
            "value": 1000
          },
          "opacity": {
            "value": 0.2, // change opacity of bubble
            "animation": {
              "speed": 400,
              "minimumValue": 0.1
            }
          },
          shape: {
            type: "circle",
        },
          "size": {
            "random": {
              "enable": true
            },
          
            "value": {
              "min": 1,
              "max": 5
            },
            "animation": {
              "speed": 4,
              "minimumValue": 0.1
            },
            detectRetina: true,
          }
        }
      }}
  />
);
};


export default Particle;
