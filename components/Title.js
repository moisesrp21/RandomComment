import { Flex, Text } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import {ImYoutube2} from 'react-icons/im';
import {useAnimationControls} from 'framer-motion';
export default function Title() {
     const [clicked, setClicked] = useState(false);
     const control = useAnimationControls();
     const variants = {
          "hide": {opacity: 0, y: 10},
          "show": {opacity: 1, y: 0}
     }
     const animation = async () => {
          await control.start("hide"); 
     }
     useEffect(() => {
          animation().then(()=> {
               control.start("show");
          })
     },[clicked])
     return(
          <Flex
          direction='column' >
                    <Text
                    fontSize={72}
                    fontWeight='bold' >
                         Random Comment</Text>
                    <motion.div
                    initial={{opacity:0}}
                    animate={control}
                    variants={variants}
                    transition={{type: "spring"}}
                    >
                         <Flex
                         align='center'
                         direction='row'
                         onClick={()=>setClicked(!clicked)}>
                              <Text
                              ml='100px'
                              mr='10px'
                              fontSize={25}>
                              from a</Text>
                              <ImYoutube2  size={100}/>
                              <Text ml='10px' fontSize={25}> video </Text>
                         </Flex>
                    </motion.div>
          </Flex>
     );
}