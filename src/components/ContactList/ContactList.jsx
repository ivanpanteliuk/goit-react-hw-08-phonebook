import { List, ListItem, Button } from './ContactList.styled';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { Notify } from 'notiflix';

const ContactList = ({ contacts }) => {
  const [deleteContact, deleteRes] = useDeleteContactMutation();

  const handleDeleteContact = id => {
    deleteContact(id)
      .then(({ data }) =>
        Notify.success(`Contact "${data.name}" deleted successfully`)
      )
      .catch(error => console.log(error));
  };

  if (deleteRes.isError)
    return (
      <p>
        Something went wrong...
        <br />
        Error code {deleteRes.error.status}
      </p>
    );

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>
            {name}: {number}
          </p>
          <Button
            type="button"
            onClick={() => {
              handleDeleteContact(id);
            }}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
