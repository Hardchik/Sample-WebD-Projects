import React from "react"
import { Modal, InputRightElement, ModalBody, Text, Link, InputGroup, Checkbox, VStack, ModalOverlay, useDisclosure, ModalContent, ModalHeader, ModalFooter, FormControl, ModalCloseButton, Button, FormLabel, Input} from "@chakra-ui/react"
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons'

export default function LoginModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen}>Login</Button>  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input ref={initialRef} placeholder='First name' />
              </FormControl>
  
              <FormControl mt={4} verticalAlign={'center'}>
                <FormLabel>Password</FormLabel>
                {/* <Input placeholder='Last name' /> */}
                <PasswordSmInput />
              </FormControl>
              <Text textAlign={'right'} color={'#09B98D'} fontSize={12}><u><Link href='#'>¿Olvidaste tu contraseña?</Link></u></Text>
              <Checkbox defaultChecked fontWeight={500}>Recordarme</Checkbox>

            </ModalBody>
  
            <VStack align={'center'} m={10}>
              <Button bgColor={'#09B98D'} color={'whiteAlpha.900'} mr={3} onClick={onClose}>
                Iniciar sesión
              </Button>
              <Text color={'black.400'} fontSize={12}>¿Aún no tienes una cuenta?</Text>
              <Text color={'#09B98D'} fontSize={12}><u><Link href='#'>¿Olvidaste tu contraseña?</Link></u></Text>
            </VStack>
          </ModalContent>
        </Modal>
      </>
    )
  }

  function PasswordSmInput() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <VStack display={'block'}>
      <InputGroup size='md'>
        <Input
          placeholder="Your password" 
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          border={'1px solid gray'}
        />
          <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? <ViewOffIcon /> : <ViewIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      </VStack>
    )
  }