'use client';
import { Input } from '@/components/ui/input';
import { FormEvent, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { IoMdSend } from 'react-icons/io';
import { toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { indigo, white } from 'tailwindcss/colors';

export function Contact() {
  const [loading, setLoading] = useState(false);
  function onEmailSubmission(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement & {
      email: { value: string };
      name: { value: string };
      subject: { value: string };
      message: { value: string };
    };

    const email = form.email.value.trim();
    const name = form.name.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    const toastStyle = { backgroundColor: indigo[700], color: white };
    const toastConfig = { style: toastStyle, duration: 1000 };

    if (name === '') return toast.error('Name can not be empty', toastConfig);
    else if (subject === '')
      return toast.error('Subject can not be empty', toastConfig);
    else if (message === '')
      return toast.error('Message can not be empty', toastConfig);

    const formData = { email, name, subject, message };

    const toastId = toast.loading('Waiting ...', { style: toastStyle });
    setLoading(true);

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) toast.success(data.msg, toastConfig);
        else toast.error(data.msg, toastConfig);
      })
      .catch(() => {
        toast.error('Something went wrong', toastConfig);
      })
      .finally(() => {
        setLoading(false);
        toast.dismiss(toastId);
        form.reset();
      });
  }

  return (
    <div
      id='#contact-me'
      className='mt-20 bg-gradient-to-tr from-indigo-700/10 to-red-950/10 py-8 lg:py-20'
    >
      <Toaster />
      <h2 className='text-center text-4xl font-semibold'>Contact</h2>
      <p className='mx-auto mt-5 text-center text-white/60 md:max-w-[450px]'>
        If you have any query fell free to reach out to me.
      </p>
      <div className='mx-auto mt-16 w-full max-w-[550px] rounded-md border border-indigo-800 p-5 shadow-[0_0_5px_2px] shadow-indigo-950'>
        <form className='space-y-5' onSubmit={onEmailSubmission}>
          <div className='flex w-full items-center gap-5'>
            <Input
              label='Email'
              name='email'
              placeholder='Enter Your Email'
              type='email'
            />
            <Input
              label='Your Name'
              name='name'
              placeholder='Enter Your Name'
              type='text'
            />
          </div>
          <Input
            label='Subject'
            name='subject'
            placeholder='Subject'
            type='text'
          />
          <div className='space-y-3'>
            <label htmlFor='message'>Message</label>
            <textarea
              name='message'
              id='message'
              rows={4}
              className='ring-offset w-full rounded-md border-2 bg-transparent px-3 py-2 outline-none ring-offset-transparent focus-visible:border-indigo-800 focus-visible:ring-indigo-800 focus-visible:ring-offset-2'
            />
          </div>
          <button
            disabled={loading}
            className={twMerge(
              'button-secondary',
              'ml-auto flex items-center gap-3 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:bg-gradient-to-r disabled:from-gray-700',
            )}
          >
            Send
            <span className='text-xl'>
              <IoMdSend />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
