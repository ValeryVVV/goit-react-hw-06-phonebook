import ContactList from "./ContactLists/ContactLists";
import Filter from "./Filter/Filter";

import style from './App.module.css';
import ContactForm from "./ContactForm/ContactForm";

export default function App() {

    // const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? []);
    // const [filter, setFilter] = useState('');

    // useEffect(() => {
    //     window.localStorage.setItem('contacts', JSON.stringify(contacts));
    // }, [contacts]);

    // const addContact = ( name, number ) => {
    //     const newContact = {
    //         id: shortid.generate(),
    //         name: name,
    //         number: number
    //     }

    //     const checkedName = contacts.find(contact => 
    //         contact.name.toLowerCase() === newContact.name.toLowerCase(),
    //         );

    //         if(checkedName) {
    //             alert(`${newContact.name} is already in contact.`)
    //             return;
    //         }

    //         setContacts([newContact, ...contacts]);
    // };

    //     const changeFilter = e => {
    //         setFilter(e.currentTarget.value.trim())
    //     };

        // const getVisibleContacts = () => {
        //     const normalizedFilter = filter.toLowerCase();
        //     return contacts.filter(contact =>
        //       contact.name.toLowerCase().includes(normalizedFilter)
        //     );
        //   };
        
        //   const deleteContact = contactId => {
        //     setContacts(contacts.filter(contact => contact.id !== contactId));
        //   };
        
        //   const visibleContacts = getVisibleContacts();
        


    return (
        <div className={style.container}>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <ContactList />
            <Filter />
            {/* {contacts.length > 0 ? (
                <>
                  
                </>
            ): (
                <h1>Contact list is empty</h1>
            )}  */}

        </div>
    )

};
