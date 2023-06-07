import { useForm, isEmail, hasLength } from '@mantine/form';
import TextInput from '@/components/TextInput';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';
import sendEmail from '@/lib/sendEmail';
import { useState } from 'react';
import showNotification from '@/lib/showNotifications';
import emailValidator from '@/lib/emailValidator';

const GetInTouch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validate: {
      name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      email: isEmail('Invalid email'),
      message: hasLength({ min: 10, max: 50 }, 'Message must be 10-50 characters long')
    }
  });

  const handleSubmit = form.onSubmit(async (values) => {
    setIsLoading(true);

    const { disposable, block, text, reason } = await emailValidator(values.email);
    if (disposable || block) {
      form.setErrors({ email: 'This domain is not registered' });
      setIsLoading(false);
      return;
    }

    try {
      const resEmail = await sendEmail(
        {
          email: values.email,
          name: values.firstName,
          message: values.message
        },
        'template_cnbsu72',
        'hBhkXIIlD02e6C63g'
      );

      if (resEmail.status !== 200) {
        throw new Error('Something went wrong in sending the message');
      }

      showNotification({
        title: 'Message Sent Successfully!',
        message:
          'Thank you for contacting me! Your message has been successfully sent. I appreciate your interest and will make every effort to respond within the next 24 hours.',
        color: 'green'
      });
      form.reset();
    } catch (error) {
      console.error(error);
      showNotification({ title: 'Failed', message: error.message, color: 'red' });
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <>
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col gap-y-2 text-neutral-300">
          <div>
            <div className="flex flex-col gap-y-3">
              <TextInput
                {...form.getInputProps('name')}
                error={form.errors.name}
                placeholder="John Doe"
                label="Name"
                withAsterisk
              />
              <TextInput
                {...form.getInputProps('email')}
                error={form.errors.email}
                placeholder="johndoe@gmail.com"
                label="Email"
                withAsterisk
              />
              <TextArea
                {...form.getInputProps('message')}
                error={form.errors.message}
                placeholder="Please send your message here..."
                label="Message"
                withAsterisk
              />

              <Button title="Submit" onClick={handleSubmit} loading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
