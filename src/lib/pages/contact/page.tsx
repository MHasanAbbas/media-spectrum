import {
  Container,
  Button,
  Field,
  Fieldset,
  Input,
  Text,
  Textarea,
  SimpleGrid,
  VStack,
  Box,
  Heading,
  Center,
  Tabs,
  GridItem,
  Separator,
} from '@chakra-ui/react';
import React, { FC } from 'react';

const TabsForm = () => {
  return (
    <Tabs.Root defaultValue='client' w='full'>
      <Tabs.List>
        <Tabs.Trigger value='client'>Clients</Tabs.Trigger>
        <Tabs.Trigger value='agency'>Agency</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value='client'>
        <Fieldset.Root size='lg' color='black'>
          <Fieldset.Content>
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Input name='name' />
            </Field.Root>

            <Field.Root>
              <Field.Label>Email address</Field.Label>
              <Input name='email' type='email' />
            </Field.Root>
            <Field.Root>
              <Field.Label>Phone number</Field.Label>
              <Input name='phone' type='tel' />
            </Field.Root>
            <Field.Root>
              <Field.Label>Message</Field.Label>
              <Textarea name='notes' />
            </Field.Root>
          </Fieldset.Content>

          <Button
            _hover={{ bg: 'secondary' }}
            bg='primary'
            w='full'
            type='submit'
            alignSelf='flex-start'
          >
            Submit
          </Button>
        </Fieldset.Root>
      </Tabs.Content>
      <Tabs.Content value='agency'>
        <Fieldset.Root size='lg' color='black'>
          <Fieldset.Content>
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Input name='name' />
            </Field.Root>
            <Field.Root>
              <Field.Label>Email address</Field.Label>
              <Input name='email' type='email' />
            </Field.Root>
            <Field.Root>
              <Field.Label>Phone number</Field.Label>
              <Input name='phone' type='tel' />
            </Field.Root>
            <Field.Root>
              <Field.Label>Message</Field.Label>
              <Textarea name='notes' />
            </Field.Root>
          </Fieldset.Content>
          <Button
            _hover={{ bg: 'secondary' }}
            bg='primary'
            w='full'
            type='submit'
            alignSelf='flex-start'
          >
            Submit
          </Button>
        </Fieldset.Root>
      </Tabs.Content>
    </Tabs.Root>
  );
};

const ContactUsPage: FC = () => {
  return (
    <>
      <Box w='full' bg='secondary'>
        <Container mt={5} maxW='7xl'>
          <Text fontSize='4xl' fontWeight='bold' color='white' p={5}>
            Contact Us
          </Text>
        </Container>
      </Box>
      <Container maxW='7xl'>
        <SimpleGrid columns={{ base: 1, md: 2 }} px={5} gap={10}>
          <VStack alignItems='flex-start' my={{ base: 5, md: 10 }}>
            <Center>
              <Heading size='5xl' color='primary' fontWeight='normal'>
                Let&#39;s create something extraordinary together.
              </Heading>
            </Center>
            <GridItem colSpan={{ base: 1, md: 2 }} borderY='solid' py={10}>
              <Text fontSize='3xl' fontWeight='normal' color='black'>
                General Enquiries
              </Text>
              <Text fontSize='2xl' fontWeight='normal' color='black' mt={3}>
                Have a general query? We&#39;ll always do our best to help:
                hello@spectrummedia.co.uk
              </Text>
            </GridItem>
          </VStack>
          <GridItem borderRadius='md' my={{ base: 5, md: 10 }}>
            <Text fontWeight='medium' color='black'>
              Get in touch with us today to learn more about our services and
              how we can help you achieve your goals.
            </Text>
            <Separator my={5} />
            <TabsForm />
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ContactUsPage;
