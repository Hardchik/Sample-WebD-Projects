import { Stack, Divider, extendTheme, Image, Text, VStack, Flex, Button, Input, Checkbox, InputGroup, InputRightElement, Link, HStack } from "@chakra-ui/react";
import React from "react";
import { dividerTheme } from './Divider.jsx'
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons'
import LoginModal from './LoginModal.jsx'
import google from '../assets/Group 6.png'
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const theme = extendTheme({
    components: { Divider: dividerTheme },
  })

const Register = () => {

    const navigate = useNavigate();

    const onIniciarSesinTextClick = useCallback(() => {
      navigate("/");
    }, [navigate]);
  
    const onGroupButton1Click = useCallback(() => {
      // Please sync "Post-Regístrate " to the project
    }, []);


    return(
        <Flex
             display={{ md: 'block', lg: 'flex' }} justify={'space-evenly'} alignItems={'center'}>
                <Stack align={'center'} textAlign={'center'}>
                    <Text color={'black.400'} fontSize={70} fontWeight={650}>Educación</Text>
                    <Text color={'#09B98D'} fontSize={70} fontWeight={650}>a <u>tu</u> medida</Text>
                </Stack>
                <Stack>
                    <VStack display={{base: 'none', lg:'flex'}} width={'65%'} height={'50%'} bgColor={'#FFFF'} rounded={'lg'} boxShadow={'xl'} p={'10'} m={'20'}>
                        <HStack justifyContent={'space-between'}>  
                          <Text cursor={'pointer'} fontSize={'125%'} onClick={onIniciarSesinTextClick}>Iniciar sesión</Text>
                          <Text fontSize={'125%'}>¡Regístrate aquí!</Text>
                        </HStack>
                        <Text fontSize={'23'} color={'black.400'} fontWeight={500}>¡Bienvenido a Xplain!</Text>
                        <Button mb={10} bgColor={'#2A99FF'} color={'whiteAlpha.900'} fontWeight={500} fontSize={23} p={7}>
                            <Image src={google} />
                            &nbsp; | Continúa con Google</Button>
                        <Stack mt={10}></Stack>
                        <HStack alignItems={'center'}>
                            {/* <Divider colorScheme={'blackAlpha'} size="xl" mt={10} /> */}
                            <div style={{ borderTop: "1px solid gray", paddingLeft: '10em', marginLeft: 20, marginRight: 20 }}></div>
                            <Text>o</Text>
                            <div style={{ borderTop: "1px solid gray", paddingLeft: '10em', marginLeft: 20, marginRight: 20 }}></div>
                            {/* <Divider colorScheme={'blackAlpha'} size="xl" mt={10} /> */}
                        </HStack>
                        
                        
                        <Flex textAlign={'left'} display={'block'} p={5}>
                            <Text fontWeight={500}>E-mail</Text>
                            <Input placeholder='Your email' width={'270px'} border={'1px solid gray'}></Input>
                            <Text fontWeight={500}>Contraseña</Text>
                            <PasswordInput />
                            <Text textAlign={'right'} color={'#09B98D'} fontSize={12}><u><Link href='#'>¿Olvidaste tu contraseña?</Link></u></Text>
                            <Checkbox defaultChecked fontWeight={500} mb={10}>Recordarme</Checkbox>
                        </Flex>
                        
                        <Button bgColor={'#09B98D'} p={3} fontWeight={500} color={'whiteAlpha.900'} boxShadow={5}>Iniciar sesión</Button>
                        <Text color={'black.400'} fontSize={12}>¿Aún no tienes una cuenta?</Text>
                        <Text color={'#09B98D'} fontSize={12}><u><Link href='#'>¿Olvidaste tu contraseña?</Link></u></Text>
                    </VStack>

                    <VStack display={{base:'flex', md:'none'}} alignSelf={'center'} w={'80vw'} bgColor={'#FCFCFC'} rounded={'lg'} boxShadow={'lg'} p={'10'} m={'20'}>
                                                
                        <Text fontSize={'15'} color={'black.400'} fontWeight={500}>¡Bienvenido a Xplain!</Text>
                        <Button mb={10} bgColor={'#2A99FF'} color={'whiteAlpha.900'} fontWeight={500} fontSize={15} p={3}>
                            <Image src={google} w={'20px'} />
                            &nbsp; | Continúa con Google</Button>

                        <div style={{ borderTop: "1px solid gray", paddingLeft: '10em', marginLeft: 20, marginRight: 20 }}></div>
                        
                        <LoginModal />
                    </VStack>

                    <HStack alignSelf={'center'} justifyContent={'space-around'} display={{base: 'none', md: 'flex', lg:'none'}} width={'90vw'} height={'60vh'} bgColor={'#FCFCFC'} rounded={'lg'} boxShadow={'lg'} p={'10'} m={'20'}>
                      <VStack>
                        <Text fontSize={'23'} color={'black.400'} fontWeight={500}>¡Bienvenido a Xplain!</Text>
                        <Button mb={10} bgColor={'#2A99FF'} color={'whiteAlpha.900'} fontWeight={500} fontSize={23} p={7}>
                            <Image src={google} />
                            &nbsp; | Continúa con Google</Button>
                      </VStack>      
                        
                        {/* <HStack>
                            <Divider colorScheme={'blackAlpha'} size="xl" mt={10} />
                            <Text>o</Text>
                            <Divider colorScheme={'blackAlpha'} size="xl" mt={10} />
                        </HStack> */}

                        <Divider orientation="vertical" />
                        
                        <VStack>
                        <Flex textAlign={'left'} display={'block'} p={5}>
                            <Text fontWeight={500}>E-mail</Text>
                            <Input placeholder='Your email' width={'270px'} border={'1px solid gray'}></Input>
                            <Text fontWeight={500}>Contraseña</Text>
                            <PasswordInput />
                            <Text textAlign={'right'} color={'#09B98D'} fontSize={12}><u><Link href='#'>¿Olvidaste tu contraseña?</Link></u></Text>
                            <Checkbox defaultChecked fontWeight={500}>Recordarme</Checkbox>
                        </Flex>
                        
                        <Button bgColor={'#09B98D'} p={3} fontWeight={500} color={'whiteAlpha.900'} boxShadow={5}>Iniciar sesión</Button>
                        <Text color={'black.400'} fontSize={12}>¿Aún no tienes una cuenta?</Text>
                        <Text color={'#09B98D'} fontSize={12}><u><Link href='#'>¿Olvidaste tu contraseña?</Link></u></Text>
                        </VStack>
                    </HStack>
                </Stack>
        </Flex>
    );
}

function PasswordInput() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <InputGroup size='md'>
        <Input
          w={'270px'}
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
          border={'1px solid gray'}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? <ViewOffIcon /> : <ViewIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }

  function PasswordSmInput() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <VStack display={'block'}>
      <InputGroup size='md'>
        <Input
          fontSize={9} 
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          border={'1px solid gray'}
        />
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? <ViewOffIcon /> : <ViewIcon />}
          </Button>
      </InputGroup>
      </VStack>
    )
  }


  export default Register;