import ContactForm from 'components/ContactForm/ContactForm';
import ContactsSection from 'components/ContactsSection';

import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { ContactsContainer } from './Contacts.styled';
import { useEffect } from 'react';

export default function Contacts() {
  const { refetch } = useGetContactsQuery();
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <ContactsContainer>
      <ContactForm />
      <ContactsSection />
    </ContactsContainer>
  );
}
