//import User from './User'

interface User {
    username: string;
    age: string;
  }

export const UserLoginForm = ():HTMLFormElement => {
    const userForm = document.createElement('form');

    const userNameLabel = document.createElement('label');
    userNameLabel.textContent = 'Name: '
    const userNameInput = document.createElement('input');
    userNameInput.type = 'text';

    const ageLabel =document.createElement('label')
    ageLabel.textContent = 'Age: '
    const ageField = document.createElement('input')
    ageField.type = 'text'

    const button = document.createElement('button')
    button.textContent = 'Submit'

    userForm.append(
        userNameLabel,
        document.createElement('br'),
        userNameInput,
        document.createElement('br'),
        ageLabel,
        document.createElement('br'),
        ageField,
        document.createElement('br'),
        button
    )
        userForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            const user: User = {
                username: userNameInput.value,
                age: ageField.value
            }
            console.log(user)
            userNameInput.value = ''
            ageField.value = ''
        })
    return userForm;
};

