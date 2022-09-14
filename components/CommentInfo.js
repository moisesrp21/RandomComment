import { Flex,Link,Text,HStack } from "@chakra-ui/react";
import {AiFillLike} from 'react-icons/ai'

export default function CommentInfo({user}) {
     const getTimeElapsed = (oldDate, recentDate) => {
          const time_difference = Math.abs(recentDate - oldDate)
          const days = Math.ceil(time_difference / (1000 * 60 * 60 * 24));
          if (days>=365)
               return `${Math.round(days/365)}ys ago`;
          else if (days>=31)
               return `${Math.round(days/31)}ms ago`;
          if (days<=0)
               return 'today'
          else
               return `${days}d ago`;
     }
     return (
          <Flex
          w='100%'
          h='50px'
          justifyContent='left'
          justifyItems='center'
          direction='row'
          >
               <Flex
               flex='1'
               direction='column'
               >
                    <Link href={`${user.authorChannelUrl}/about`} fontWeight='bold'>{user.authorDisplayName}</Link>
                    <Text color='main.commentInfoText' fontSize='sm'>{getTimeElapsed(new Date(user.publishedAt), new Date())}</Text>
               </Flex>
               <HStack
               pr='15px'
               spacing={3}>
                    <AiFillLike />
                    <Text>{user.likeCount}</Text>
               </HStack>
          </Flex>
     )
}