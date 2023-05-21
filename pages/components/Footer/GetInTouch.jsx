import { useForm } from '@mantine/form';

const GetInTouch = () => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0
    }
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <h3 className="title">Get in touch</h3>
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col gap-y-2 text-neutral-300">
          <label for="html" value="HTML">
            Name
          </label>
          <input
            type="text"
            class="w-full border border-gray-300 px-4 py-2 outline-transparent focus:border-2 focus:border-orange-500"
          />
        </div>
      </div>
    </form>
  );
};

export default GetInTouch;
