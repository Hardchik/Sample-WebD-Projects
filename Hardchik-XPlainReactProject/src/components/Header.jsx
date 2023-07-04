import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

// const Links = ['clases', 'profesores', 'chat'];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box w={'100vw'} bg={useColorModeValue('#09B98D', '#09B98D')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box color={'white'}>Logo</Box>
            <HStack
            color={'white'}
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Link px={2} py={1} rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('#3AC6A3', '#3AC6A3'),
                }}
                href={'/clases'}>
                Clases
              </Link>
              <Link px={2} py={1} rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('#3AC6A3', '#3AC6A3'),
                }}
                href={'/profesores'}>
                Profesores
              </Link>
              <Link px={2} py={1} rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('#3AC6A3', '#3AC6A3'),
                }}
                href={'/chat'}>
                Chat
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Text display={{base:'none', md:'block'}} color={'white'}>Balance: 3 horas</Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              variant={'solid'}
              bgColor={'white'}
              color={'#09B98D'}
              size={'sm'}
              mr={4}
              // leftIcon={<AddIcon />}
              >
              Comprar
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  // src={
                  //   'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  // }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Ajustes</MenuItem>
                <MenuItem>Ayuda</MenuItem>
                <MenuDivider />
                <MenuItem color={'red'}><CloseIcon />  &nbsp; Cerrar sesión</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4} color={'white'}>
            <Link px={2} py={1} rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  // bg: useColorModeValue('#3AC6A3', '#3AC6A3'),
                }}
                href={'/clases'}>
                Clases
              </Link>
              <Link px={2} py={1} rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  // bg: useColorModeValue('#3AC6A3', '#3AC6A3'),
                }}
                href={'/profesores'}>
                Profesores
              </Link>
              <Link px={2} py={1} rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  // bg: useColorModeValue('#3AC6A3', '#3AC6A3'),
                }}
                href={'/chat'}>
                Chat
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}