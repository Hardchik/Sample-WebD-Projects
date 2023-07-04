import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Image,
    Button,
    VStack,
    Text,
    Wrap,
    WrapItem,
    Input,
    Stack,
    Radio,
    RadioGroup,
    Checkbox,
    FormControl,
    Container, 
    FormLabel
    // Lorem
  } from '@chakra-ui/react'
import { Select } from "chakra-react-select";
import React, { useEffect } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {groupedOptions} from './../data/groupedOptions'

function UserInfo() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = React.useState('1')

    const handle = (event) => {
        event.preventDefault();
      };
    // useEffect(()=>{
    //     value.addEventListener('wheel', handle);
    // },[]);  

    return (
      <>
        <Button onClick={onOpen}>Update Profile</Button>
  
        <Modal isOpen={isOpen} size={'xxl'} onClose={onClose}>
          <ModalOverlay />
          <ModalContent p={10} w={{base:'100vw', sm:'90%', md:'50%', lg:'40%'}}>
            <VStack m={5}>
                <Image src={'#'} alt='...' />
                <ModalHeader textAlign={'center'} fontSize={'200%'}>¡Completa tu registro!</ModalHeader>
            </VStack>
            <ModalBody justify={'center'}>
                <Wrap mt={10} spacing={9}>
                    <WrapItem>
                        <Stack>
                            <Text fontWeight={500}>Nombre</Text>
                            <Input w={'250px'} />
                        </Stack>
                    </WrapItem>
                    <WrapItem>
                        <Stack>
                            <Text fontWeight={500}>Apellido</Text>
                            <Input w={'250px'} />
                        </Stack>
                    </WrapItem>
                    <WrapItem>
                        <Stack>
                            <Text fontWeight={500}>Celular</Text>
                            <Input  w={'250px'} />
                        </Stack>
                    </WrapItem>
                </Wrap>
                <Wrap mt={10} spacing={5} justify={'space-between'}>
                    <WrapItem>
                        <Stack>
                            <Text fontWeight={'500'}>Soy</Text>
                            <RadioGroup onChange={setValue} value={value}>
                                <Stack>
                                    <Radio colorScheme={'#09B98D'} value='1'>Estudiante</Radio>
                                    <Radio colorScheme={'#09B98D'} value='2'>Padre/Madre</Radio>
                                </Stack>
                            </RadioGroup>
                        </Stack>
                    </WrapItem>
                    <WrapItem>
                        <Stack>
                            <Text fontWeight={'500'}>¿Qué recursos/guías te interesan?</Text>
                            <Checkbox colorScheme={'#09B98D'} defaultChecked>Bachillerato Internacional IB</Checkbox>                    
                            <Checkbox colorScheme={'#09B98D'}>Universidad americanas</Checkbox>                    
                        </Stack>
                    </WrapItem>
                </Wrap>
            </ModalBody>
  
            <ModalFooter mt={8}>
              <Text p={2} color={'#5555'}>1/2</Text>
              {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button> */}
              <UserInfoFinal onClick={onClose} />
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  function UserInfoFinal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        <Button bgColor={'#09B98D'} color={'white'} onClick={onOpen}>Siguiente</Button>

        <Modal isOpen={isOpen} size={'xxl'} onClose={onClose}>
          <ModalOverlay />
          <ModalContent p={10} w={{base:'100vw', sm:'90%', md:'50%', lg:'40%'}}>
          <VStack m={5}>
                <Image src={'#'} alt='...' />
                <ModalHeader textAlign={'center'} fontSize={'150%'}>¡Bienvenido, Juan! Cuéntanos sobre ti...</ModalHeader>
            </VStack>
            <ModalBody>
            <Container mt={10}>
                    <FormControl>  
                    <WrapItem>    
                        <Stack direction={'row'}>
                            <Stack>
                                <FormLabel w={'250px'} fontWeight={500}>Colegio</FormLabel>
                                <Select
                                    name="Colegio"
                                    options={groupedOptions}
                                    // placeholder="Select some colors..."
                                    closeMenuOnSelect={false}
                                />
                            </Stack>
                            <Stack>
                                <FormLabel w={'250px'} fontWeight={500}>Año de Graduación</FormLabel>
                                <Select
                                    name="Graduación"
                                    options={groupedOptions}
                                    // placeholder="Select some colors..."
                                    closeMenuOnSelect={false}
                                />
                            </Stack>
                        </Stack>
                    </WrapItem>
                    <WrapItem>
                        <Stack mt={10}>
                            <FormLabel w={'250px'} fontWeight={500}>¿En qué materias necesitas ayuda?</FormLabel>
                            <Select
                                isMulti
                                name="materias"
                                options={groupedOptions}
                                // placeholder="Select some colors..."
                                closeMenuOnSelect={false}
                            />
                        </Stack>
                    </WrapItem>
                  </FormControl>
                </Container>
            </ModalBody>
  
            <ModalFooter mt={10}>
              <Text p={2} color={'#5555'}>2/2</Text>
              {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button> */}
              <Button bgColor={'#09B98D'} color={'white'} onClick={onClose}>Listo</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }


  export default UserInfo;