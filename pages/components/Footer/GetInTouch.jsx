import { useForm, isEmail, hasLength } from '@mantine/form';
import TextInput from '../TextInput';
import TextArea from '../TextArea';
import Button from '../Button';

const GetInTouch = () => {
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

  const handleSubmit = form.onSubmit((values) => {
    console.log('test');
    console.log({ values });
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

              <Button title="Submit" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
