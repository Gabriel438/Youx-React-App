export default function InputPadrao({ id, label, className, ...props }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className={className}>
        <label
          className={classNames("classblock text-sm font-medium text-gray-700")}
        >
          {label}
        </label>
        <input
          {...props}
          onChange={({ target }) => props.onChange(target.value)}
          id={id}
          autoComplete="family-name"
          className="mt-1 focus:ring-indigo-500 bg-white z-50 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </>
  );
}
