import { Box, Flex, Text } from "@chakra-ui/react";


export function Trusted(){
    return (
        <div>
            <Box w={'70%'} p={'40px' } textAlign={'center'} borderRadius={'20px'} m={'auto auto 20px auto'} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
              <Text m={'auto'} fontSize={'25px'} fontWeight={'extrabold'}>Trusted partner in 4500+ growth stories...</Text> 
              <Flex width={'80%'} m={'auto'} mt={'30px'}>
                <Box w={'20%'} m={'auto'}>
                    <Text m={'auto'} fontSize={'25px'} fontWeight={'extrabold'}>94%</Text>
                    <Text m={'auto'} fontSize={'12px'} >Most likely to recommend</Text> 
                </Box>
                <Box w={'20%'} m={'auto'}>
                    <Text m={'auto'} fontSize={'25px'} fontWeight={'extrabold'}>94%</Text>
                    <Text m={'auto'} fontSize={'12px'} >Most likely to recommend</Text> 
                </Box>
                <Box w={'20%'} m={'auto'}>
                    <Text m={'auto'} fontSize={'25px'} fontWeight={'extrabold'}>94%</Text>
                    <Text m={'auto'} fontSize={'12px'} >Most likely to recommend</Text> 
                </Box>
                <Box w={'20%'} m={'auto'}>
                    <Text m={'auto'} fontSize={'25px'} fontWeight={'extrabold'}>94%</Text>
                    <Text m={'auto'} fontSize={'12px'} >Most likely to recommend</Text> 
                </Box>
              </Flex> 
            </Box>
        </div>
    )
}