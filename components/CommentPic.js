import { Flex,Link, Img } from "@chakra-ui/react";
export default function CommentPic({user}) {
     return(
          <Flex
          h='100%'>
               <Link href={`${user.authorChannelUrl}/about`}>
                    <Img 
                    src={user.authorProfileImageUrl} 
                    width='50px' 
                    height='50px'
                    borderRadius='20px'
                    mr='20px'/>
               </Link>
          </Flex>
     );
}