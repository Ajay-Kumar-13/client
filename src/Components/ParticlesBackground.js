import Particles from "react-tsparticles";
import particlesConfig from "./Config/particles-config";


function ParticlesBackground() {
    return (
        <Particles params={particlesConfig}></Particles>
    )
}

export default ParticlesBackground;