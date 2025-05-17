import {
  Container,
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React, { FC } from 'react';

const ContactUsPage: FC = () => {
  return (
    <Container maxW='7xl' py={8}>
      <Text>
        Ready to take your media strategy to the next level? <br />
        Get in touch with us today to learn more about our services and how we
        can help you achieve your goals.
      </Text>
    
      <Fieldset.Root size='lg' maxW='md'>
        <Stack>
          <Fieldset.Legend>Contact details</Fieldset.Legend>
        </Stack>
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

        <Button type='submit' alignSelf='flex-start'>
          Submit
        </Button>
      </Fieldset.Root>
    </Container>
  );
};

export default ContactUsPage;
