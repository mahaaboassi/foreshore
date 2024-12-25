import { TypeAnimation } from 'react-type-animation';
function Retype({text}) {
    return ( <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          text,
          1000, // wait 1s before replacing "Mice" with "Hamsters"
        //   'We produce food for Hamsters',
        //   1000,
        //   'We produce food for Guinea Pigs',
        //   1000,
        //   'We produce food for Chinchillas',
        //   1000
        ]}
        cursor ={false}
        wrapper="span"
        speed={50}
        // style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      /> );
}

export default Retype;