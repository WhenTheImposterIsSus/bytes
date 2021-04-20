import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button, 
  useDisclosure,
  useColorModeValue,
  Box,
  VStack
} from "@chakra-ui/react"
import React from "react";
import DarkModeButton from "./darklightbtn"
import DeleteAcc from "./deleteacc"

const SettingPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const btntxtclr = useColorModeValue("blue", "lightblue")

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open Settings
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Settings</DrawerHeader>

            <DrawerBody>
                <Box>
                  <VStack spacing="24px" align="stretch">
                    <DarkModeButton />
                    <DeleteAcc />
                  </VStack>
                </Box>
              
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color={btntxtclr} onClick={onClose}>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default SettingPage;