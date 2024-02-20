import {
  Heading,
  IconButton,
  Flex,
  Box,
  Spacer,
  ButtonGroup,
  Button,
  MenuList,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { NewNoteModal } from "./NewNoteModal";
import { filterNotes } from "../types";

interface noteProp {
  setStatus: React.Dispatch<React.SetStateAction<filterNotes>>;
}

export function Header({ setStatus }: noteProp) {
  const filter = (value: filterNotes) => {
    console.log(value);
    setStatus(value);
  };
  const logIn = () => {
    console.log("LogIn");
  };
  return (
    <Flex color="white" minWidth="max-content" alignItems="center" gap="2">
      <Box p="2">
        <Heading size="md">Noted!</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Menu closeOnSelect={false}>
          <MenuButton
            as={IconButton}
            aria-label="filter notes"
            icon={<ViewIcon />}
            bg="white"
            _hover={{
              bg: "pink.500",
            }}
            variant="outline"
          />
          <MenuList minWidth="240px" color="black">
            <MenuOptionGroup
              defaultValue="all"
              title="What to show"
              type="radio"
            >
              <MenuItemOption
                onClick={() => {
                  filter(filterNotes.All);
                }}
                _hover={{ bg: "pink.500" }}
                value="all"
              >
                All
              </MenuItemOption>
              <MenuItemOption
                onClick={() => {
                  filter(filterNotes.Archived);
                }}
                _hover={{ bg: "pink.500" }}
                value="archived"
              >
                Archived
              </MenuItemOption>
              <MenuItemOption
                onClick={() => {
                  filter(filterNotes.Actived);
                }}
                _hover={{ bg: "pink.500" }}
                value="active"
              >
                Active
              </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>{" "}
        <NewNoteModal />
        <Button
          onClick={logIn}
          _hover={{
            bg: "pink.500",
          }}
        >
          Log in
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
