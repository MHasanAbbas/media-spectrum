import {
  Container,
  Button,
  Field,
  Fieldset,
  Input,
  Text,
  Textarea,
  SimpleGrid,
  Box,
  Heading,
  Tabs,
  GridItem,
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
      <Box bg='secondary'>
        <Container maxW='7xl' py={10}>
          <Heading
            px={{ base: 4, md: '0' }}
            size={{ base: '3xl', md: '7xl' }}
            color='white'
          >
            Let&#39;s create something extraordinary together.
          </Heading>
          <Box>
            <Heading
              textAlign='left'
              size={{ base: 'xl', md: '2xl' }}
              mt={5}
              px={4}
              color='white'
              fontWeight='semibold'
            >
              Get in touch with us today to learn more about our services and
              how we can help you achieve your goals.
            </Heading>
          </Box>
        </Container>
      </Box>

      <Container maxW='7xl'>
        <SimpleGrid columns={{ base: 1, md: 2 }} px={5} gap={10}>
          <GridItem py={10}>
            <Text fontSize='3xl' fontWeight='normal' color='black'>
              General Enquiries
            </Text>
            <Text fontSize='2xl' fontWeight='normal' color='black' mt={3}>
              Have a general query? We&#39;ll always do our best to help:
              hello@spectrummedia.co.uk
            </Text>
          </GridItem>
          <GridItem borderRadius='md' my={{ base: 5, md: 10 }}>
            <TabsForm />
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ContactUsPage;
