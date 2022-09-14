import { Flex} from "@chakra-ui/react";
import CommentPic from './CommentPic';
import CommentMain from './CommentMain';
import {motion} from 'framer-motion';

export default function Comment({user, control}) {
     const variants = {
          "hide": {opacity: 0, y:20},
          "show": {opacity: 1, y:0},
     }
     return(
          <motion.div
          // initial={{opacity:0, y:20}}
          animate={control}
          variants={variants}
          transition={{type: 'tween'}}
          >
               <Flex
               direction='column'
               align='center'
               w='100%'
               >
                    <Flex
                    borderStyle='solid'
                    borderColor='gray.300'
                    borderWidth='2px'
                    borderRadius='15px'
                    minW='400px'
                    w='90%'
                    h='90%'
                    bg='main.commentBG'
                    p='10px'
                    direction='row'
                    >
                         <CommentPic user={user}/>
                         <CommentMain user={user}/>
                    </Flex>
               </Flex>
          </motion.div>
     )
}