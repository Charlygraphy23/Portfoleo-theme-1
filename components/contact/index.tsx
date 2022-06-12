import { send as emailSend } from '@emailjs/browser';
import React, { useCallback, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Modal, ModalBody } from 'reactstrap';
import Input from '../../core/components/Input';
import AppContext from '../../store/index';

const ContactMe = () => {
  const store = useContext(AppContext);
  const [form, setForm] = useState({
    name: '',
    message: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const toggleModal = useCallback(
    () => store?.dispatch({ contactMeModalShow: false }),
    [store]
  );

  const sendEmail = useCallback(
    (e) => {
      e.preventDefault();

      // const modal = new ContactMeControl();
      const container = document.getElementById('contactMeForm');
      console.log({ container });

      if (form.email && form.message && form.name) {
        const templateID = process.env.TEMPLATE_ID ?? '';
        const serviceID = process.env.SERVICE_ID ?? '';
        const templateParams = {
          name: form.name,
          message: form.message,
          from_email: form.email,
        };
        setLoading(true);
        emailSend(serviceID, templateID, templateParams)
          .then(() => {
            setLoading(false);
            setForm({
              name: '',
              message: '',
              email: '',
            });
            toast.success('SuccessFully Send');
            toggleModal();
          })
          .catch((err) => {
            setLoading(false);
            console.log('err', err);
          });
      } else {
        return toast.warn('Please enter all info.');
      }
    },
    [form.email, form.message, form.name, toggleModal]
  );

  return (
    <Modal
      isOpen={store?.state.contactMeModalShow}
      modalClassName='modal fade contactMe '
      centered
      toggle={toggleModal}
    >
      <ModalBody>
        <form action='#' className='contactMe__container' onSubmit={sendEmail}>
          <h1 className='headline1 text-center mb-4'>Contact Me</h1>

          <Input
            name='name'
            label='Name'
            type='text'
            placeHolder='Name'
            iconClassName='bi bi-person'
            className='mb-3'
            onChange={handleChange}
            value={form.name}
          />

          <Input
            name='email'
            className='mb-3'
            label='Email'
            type='email'
            placeHolder='Email'
            iconClassName='bi bi-envelope'
            onChange={handleChange}
            value={form.email}
          />

          <Input
            name='message'
            className='mb-3'
            label='Message'
            type='text'
            placeHolder='Message'
            iconClassName='bi bi-chat-left-dots'
            onChange={handleChange}
            value={form.message}
          />

          <div className='d-flex justify-content-end align-items-center'>
            <button type='submit' className='email__send'>
              {loading ? (
                <div className='spinner-border text-light' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              ) : (
                'Send'
              )}
            </button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default ContactMe;
