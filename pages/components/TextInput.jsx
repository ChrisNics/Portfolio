const TextInput = ({
  required = true,
  label,
  withAsterisk = true,
  placeholder,
  error = undefined,
  ...inputProps
}) => {
  const classNames = `block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 ${
    error ? 'dark:border-red-700' : 'dark:border-gray-600'
  } dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-orange-500 dark:focus:ring-orange-500`;
  return (
    <div>
      <label for={label} class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        {label} {withAsterisk && <span className="text-red-700">*</span>}
      </label>
      <input
        type="text"
        id={label}
        className={classNames}
        placeholder={placeholder}
        required={required}
        {...inputProps}
      />
      {error && <p className="mt-2 dark:text-red-700">{error}</p>}
    </div>
  );
};

export default TextInput;
