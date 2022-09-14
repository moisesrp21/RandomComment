import { Flex} from "@chakra-ui/react";
import CommentInfo from './CommentInfo';
import CommentBody from './CommentBody';

export default function CommentMain({user}) {
     return (
          <Flex
          flex='1'
          direction='column'
          >
               <CommentInfo user={user}/>
               <CommentBody user={user}/>
          </Flex>
     );
}