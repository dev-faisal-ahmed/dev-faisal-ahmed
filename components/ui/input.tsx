type InputProps = {
  label: string;
  name: string;
  placeholder: string;
  type: 'text' | 'email';
};

export function Input({ label, name, placeholder, type }: InputProps) {
  return (
    <div className='w-full space-y-3'>
      <label htmlFor={name}>{label}</label>
      <input
        className={`ring-offset block w-full rounded-md border-2 bg-transparent px-3 py-2 outline-none ring-offset-transparent focus-visible:border-indigo-800 focus-visible:ring-indigo-800 focus-visible:ring-offset-2`}
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        required
      />
    </div>
  );
}
