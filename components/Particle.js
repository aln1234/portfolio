import Particles from "react-tsparticles";



const Particle = () => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
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
              "opacity": 0.2,
              "size": 20
            },
            "grab": {
              "distance": 1000
            }
          }
        },
        "particles": {
          "color": {
            "value": "#40739e"
          },
          "links": {
            "color": {
              "value": "#2c3e50"
            },
            "distance": 1000,
            "opacity": 0.6
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
            "limit": 150,
            "value": 1000
          },
          "opacity": {
            "value": 0.1,
            "animation": {
              "speed": 400,
              "minimumValue": 0.1
            }
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
            }
          }
        }
      }}
  />
);
};

export default Particle;
