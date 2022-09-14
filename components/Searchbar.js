import axios from './axios';
import { useState } from "react";
import { Button, HStack, Input, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

export default function Searchbar({control, setUser}) {
     const [videoUrl, setVideoUrl] = useState('');
     const [button, setButton] = useState("initial");
     const errorAni = useAnimation();

     const variants = {
          "initial": {opacity: 0, y: 20},
          "show": {opacity: 1, y: 0},
          "hide": {opacity: 0, x: 20}
     }

     const sendRequest = async () => {
          if (videoUrl!== '') {
               control.start("hide")
               setButton("hide")
               let data = {
                    "url": videoUrl
               };
               await axios.post('/randomcomment',data).then(res => {
                    setUser(res.data);
                    control.start("show");
                    setVideoUrl('');
               }).catch((err) => {console.log("something happen");})
          }
          else {
               errorAni.start({x: [-5,5,0]})
          }
     }
     return(
          <motion.div
          layout
          animate={errorAni}
          transition={{type: 'spring', stiffness: 2}}
          >
               <HStack
                    flex='1'
                    onFocus={() => setButton("show")}
                    onBlur={() => {setButton("hide");}}
                    spacing={7}
                    w='100%'
                    justify='center'>
                    <motion.div>
                         <Input 
                              value={videoUrl}
                              type='text'
                              w='65vw' 
                              variant='flushed' 
                              borderColor='gray.900' 
                              pl='15px' 
                              placeholder='Enter video url' 
                              size='lg'
                              onKeyDown={e => {if (e.key==='Enter') sendRequest()}}
                              onChange={(e) => {
                                   setVideoUrl(e.target.value);
                              }}/>
                    </motion.div>
                    <motion.div
                         initial={{opacity:0}}
                         animate={button}
                         variants={variants}
                         transition={{type: "spring"}}
                         >
                         <Button 
                              _hover={{bg:'green.200'}}
                              bg='main.buttonGreenBG'
                              type='submit'
                              padding='20px'
                              borderRadius='20px'
                              onClick={sendRequest}
                              >
                              <Text 
                                   w='100%' 
                                   h='100%' 
                                   display='flex'
                                   alignItems='center'
                                   textAlign='center'
                                   justify='center' 
                                   fontWeight='extrabold' 
                                   fontSize='25px'
                                   >
                                   <BsFillArrowRightCircleFill/></Text>
                         </Button>
                    </motion.div>
               </HStack>
          </motion.div>
     )
}