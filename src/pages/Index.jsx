import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Grid, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { FaFolder, FaFile, FaPlus, FaUpload } from "react-icons/fa";

const Index = () => {
  const [files, setFiles] = useState([
    { id: 1, name: "Document 1.docx", type: "file" },
    { id: 2, name: "Folder 1", type: "folder" },
    { id: 3, name: "Image 1.jpg", type: "file" },
  ]);
  const [selectedFile, setSelectedFile] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleFileUpload = () => {
    // Simulating file upload
    const newFile = {
      id: files.length + 1,
      name: `New File ${files.length + 1}`,
      type: "file",
    };
    setFiles([...files, newFile]);
  };

  const handleFolderCreate = () => {
    // Simulating folder creation
    const newFolder = {
      id: files.length + 1,
      name: `New Folder ${files.length + 1}`,
      type: "folder",
    };
    setFiles([...files, newFolder]);
  };

  const openFile = (file) => {
    setSelectedFile(file);
    onOpen();
  };

  return (
    <Box p={8}>
      <Heading as="h1" mb={8}>
        My Drive
      </Heading>
      <Box mb={8}>
        <Input placeholder="Search files..." />
      </Box>
      <Box mb={8}>
        <Button leftIcon={<FaUpload />} colorScheme="blue" mr={4} onClick={handleFileUpload}>
          Upload File
        </Button>
        <Button leftIcon={<FaPlus />} colorScheme="green" onClick={handleFolderCreate}>
          New Folder
        </Button>
      </Box>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
        {files.map((file) => (
          <Box key={file.id} borderWidth={1} borderRadius="lg" p={4} textAlign="center" cursor="pointer" onClick={() => openFile(file)}>
            {file.type === "folder" ? <FaFolder size={48} /> : <Image src="https://images.unsplash.com/photo-1618052442385-ecaa3ad0b1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaWxlJTIwaWNvbnxlbnwwfHx8fDE3MDk4MDI3MDl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="File" />}
            <Text mt={2}>{file.name}</Text>
          </Box>
        ))}
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedFile?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>File content goes here...</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
