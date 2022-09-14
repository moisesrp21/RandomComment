import { Flex} from "@chakra-ui/react";
import { useState } from "react";
import Comment from '../components/Comment';
import Searchbar from '../components/Searchbar';
import Title from '../components/Title';
import {motion, useAnimationControls} from 'framer-motion'

export default function Page() {
     const [user, setUser] = useState(null);
     const control = useAnimationControls();
     const showComment = () => {
          if (user) {
               return (
                    <motion.div
                    initial={{opacity:0, y:20}} 
                    animate={{opacity:1, y: 0}}
                    >
                         <Comment control={control} user={user}/> 
                    </motion.div>
               );
          }
          else return "";
     }
     return (
          <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          ransition={{duration: 1}}
          style={{width:'100vw', height:'100vh',margin: 0, padding: 0}}>
               <Flex
                    w='100'
                    h='fit-content'
                    direction="column"
                    align="center" 
                    bgGradient='linear(to top,#ff00002f, #1616161a)'
                    >
                    <Flex
                         w='100%'
                         h='40vh'
                         minH='200px'
                         align="center"
                         justify='center' >
                         <Title/>
                    </Flex>
                    <Flex
                         w='100%'
                         h='20vh'
                         minH='250px'
                         align="center"
                         justify='center' >
                         <Searchbar control={control} setUser={setUser}/>
                    </Flex>
                    <Flex
                         w='100%'
                         h='40vh'
                         minH='200px'
                         align="center"
                         direction="column" >
                         {showComment()}
                    </Flex>
               </Flex>
          </motion.div>
     );
}