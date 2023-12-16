
export default function() {
    const contactBox = document.createElement('div');
    contactBox.classList.add('contact-box');

    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');

    //Name Field
    const nameField = document.createElement('div');
    const labelName = document.createElement('label');
    labelName.setAttribute('for', 'name');
    labelName.textContent = "Name: ";
    const inputName = document.createElement('input');
    inputName.setAttribute('name', 'name');
    inputName.setAttribute('id', 'name');

    nameField.appendChild(labelName);
    nameField.appendChild(inputName);

    contactForm.appendChild(nameField);

    //Email Field
    const emailField = document.createElement('div');
    const labelEmail = document.createElement('label');
    labelEmail.setAttribute('for', 'email');
    labelEmail.textContent = "Email: ";
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('name', 'email');
    inputEmail.setAttribute('id', 'email');

    emailField.appendChild(labelEmail);
    emailField.appendChild(inputEmail);

    contactForm.appendChild(emailField);

    //Message Field
    const messageField = document.createElement('div');
    const labelMessage = document.createElement('label');
    labelMessage.setAttribute('for', 'message');
    labelMessage.textContent = "Message: ";
    const inputMessage = document.createElement('textarea');
    inputMessage.setAttribute('name', 'message');
    inputMessage.setAttribute('id', 'message');
    inputMessage.setAttribute('rows', '4');

    messageField.appendChild(labelMessage);
    messageField.appendChild(inputMessage);

    contactForm.appendChild(messageField);

    //Submit Button
    const submit = document.createElement('button');
    submit.textContent = "Submit";
    submit.classList.add('submit-button');
    
    contactForm.appendChild(submit);
    contactForm.onsubmit = (e) => {
        e.preventDefault();
    }


    contactBox.appendChild(contactForm);

    return contactBox;
}