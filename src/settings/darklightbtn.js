import { 
  Button, 
  useColorMode
} from "@chakra-ui/react"

export default function DarkModeButton() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
    )
}
