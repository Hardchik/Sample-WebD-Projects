import React from "react";
import {Stack,VStack, HStack, Text, SimpleGrid, Image, Button, Divider, Wrap, WrapItem ,Flex} from '@chakra-ui/react'
import {} from '@chakra-ui/icons'
import UserInfo from "./UserInfoModal";

function Cards(props) {
    return(
            <HStack display={'flex'} gap={2}><Image src={props.address} alt='...' /><Text>{props.name}</Text></HStack>
    );
  }

const Dashboard = () =>{
    return(
        <>
            <Stack m={10}>
                <Text fontSize={'200%'}>¡Bienvenido a Xplain! ¿Qué quieres aprender hoy?</Text>
                <VStack gap={5}>
                    <Flex direction={{base:'column', lg:'row'}} gap={10} justify={'space-between'}>
                        <Stack rounded={'xl'} shadow={'md'} bgColor={'white'} p={6}>
                            <Text fontSize={'150%'}>Bachillerato Internacional</Text>
                            <Text fontSize={'125%'}>Guía obligatoria para entender el IB</Text>
                            <Divider/>
                            <VStack>
                                <SimpleGrid columns={2} spacing={10}>
                                    <Cards name='IB Matemáticas' address='#' />
                                    <Cards name='IB Historia' address='#' />                                    
                                    <Cards name='IB Química' address='#' />
                                    <Cards name='IB Biología' address='#' />
                                    <Cards name='IB Inglés' address='#' />
                                    <Cards name='IB Literatura' address='#' />
                                    <Cards name='IB Física' address='#' />
                                    <Cards name='IB TOK' address='#' />
                                </SimpleGrid>
                            </VStack>  
                        </Stack>
                        <Stack rounded={'xl'} shadow={'md'} bgColor={'white'} p={6}>
                            <Text fontSize={'150%'}>Universidades americanas</Text>
                            <Text fontSize={'125%'}>Guía para universidades americanas</Text>
                            <Divider/>
                            <VStack>
                                <SimpleGrid columns={2} spacing={10}>
                                    <Cards name='Ensayos personales' address='#' />
                                    <Cards name='Actividades extracurriculares' address='#' />
                                    <Cards name='Exámenes de entrada' address='#' />
                                    <Cards name='Cartas de recomendación' address='#' />
                                    <Cards name='Becas y ayuda financiera' address='#' />
                                    <Cards name='Lista de universidades' address='#' />
                                </SimpleGrid>
                            </VStack>    
                        </Stack>
                    </Flex>

                    <Stack display={'flex'} align={'center'} direction={{base:'column', md:'row'}} fontSize={{base:'1.5vw', md:'1.1vw', lg:'0.9vw', xl:'0.7vw'}} rounded={'xl'} shadow={'md'} justifyContent={'space-between'} w={'60%'} px={10} py={4} bgColor={'white'}>
                        <Text fontSize={'150%'}>Tenemos profesores increíbles para IB, ¡reserva una clase con ellos!</Text>
                        <Button fontSize={{base:'2vw', md:'1.4vw', lg:'1vw'}} bgColor={'#09B98D'} color={'white'}>Reservar</Button>
                    </Stack>
                    <UserInfo />
                </VStack>
            </Stack>
        </>
    );
}

export default Dashboard