import { Flex,Text} from "@chakra-ui/react";
export default function CommentBody({user}) {
     return(
          <Flex
          flex='1'
          p='10px 10px 30px 10px'
          >
               <Text>{user.textOriginal}</Text>
          </Flex>
     )
}