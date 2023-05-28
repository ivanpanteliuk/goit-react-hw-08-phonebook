import { Notify } from 'notiflix';

import { CFHeading, StyledButton } from './ContactForm.styled';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';
import Loader from 'components/Loader/Loader';
import FilterInput from 'components/FilterInput/FilterInput';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const notifyOptions = {
  width: '450px',
  position: 'right-top',
  distance: '20px',
  timeout: 2000,
  clickToClose: true,
  fontSize: '20px',
  cssAnimationStyle: 'zoom',
  showOnlyTheLastOne: true,
};

Notify.init(notifyOptions);

function ContactForm() {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, addContactRes] = useAddContactMutation();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (
      contacts?.some(
        storedContact => storedContact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notify.failure(`"${name}" is already in contacts.`);
    } else if (
      contacts?.some(storedContact => storedContact.number === number)
    ) {
      return Notify.failure(`"${number}" is already in contacts.`);
    }

    addContact({ name, number })
      .then(res =>
        Notify.success(`Contact "${res.data.name}" added to phonebook `)
      )
      .catch(error => console.log(error));

    form.reset();
  };

  if (addContactRes.error) {
    return <ErrorMessage message={addContactRes.error.status} />;
  }

  return (
    <>
      {addContactRes.isLoading && <Loader />}
      <div>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add Contact
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              autoComplete="off"
              fullWidth
              id="name"
              label="Contact name"
              autoFocus
            />
            <TextField
              margin="normal"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              autoComplete="off"
              fullWidth
              label="Phone number"
              id="number"
            />
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add contact
            </StyledButton>
          </Box>
        </Box>

        {contacts?.length > 1 && (
          <>
            <CFHeading>Filter contacts</CFHeading>
            <FilterInput />
          </>
        )}
      </div>
    </>
  );
}

export default ContactForm;
