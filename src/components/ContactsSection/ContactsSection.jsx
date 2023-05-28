import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { selectFilter } from 'redux/selectors';
import { ContactsHeading } from './ContactsSection.styles';

export const ContactsSection = () => {
  const { isLoading, isError, error, data: contacts } = useGetContactsQuery();

  const filter = useSelector(selectFilter);
  const visibleContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (isError) {
    Notify.failure(`${error?.status}! ${error?.error}`);
  }

  return (
    <>
      {isLoading && <Loader />}
      <div>
        <ContactsHeading>Contacts</ContactsHeading>
        {!!contacts?.length ? (
          !!visibleContacts?.length ? (
            <ContactList contacts={visibleContacts} />
          ) : (
            <ContactsHeading>
              There is no matches for this search query
            </ContactsHeading>
          )
        ) : (
          <ContactsHeading>There is no stored contacts yet </ContactsHeading>
        )}
      </div>
    </>
  );
};

export default ContactsSection;
