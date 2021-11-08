/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

// import { FaCheck as CheckIcon } from 'react-icons/fa';
import { supabase } from '@/utils/supabaseClient';

type Props = {
  open?: boolean;
  setOpen: (open: boolean) => void;
};

export default function Example({ open = false, setOpen }: Props) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function signIn(event: any) {
    event.preventDefault();
    if (!email) {
      setError('Provide an email address or else...');
      return;
    }
    const { error } = await supabase.auth.signIn({
      email,
    });
    if (error) {
      console.info({ error });
      setError(error.message);
    } else {
      setSubmitted(true);
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
        onClose={setOpen}
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 text-gray-300'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block align-bottom bg-gray-900 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:p-6 md:max-w-xl w-full bg-opacity-80'>
              <div className='min-h-full flex flex-col justify-center py-6 sm:px-6 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                  <img
                    className='mx-auto h-12 w-auto'
                    src='/logo-navbar.png'
                    alt='Workflow'
                  />
                </div>
                {submitted && (
                  <div className='text-center mt-6'>
                    <h4 className='text-xl font-normal'>
                      Please check your email to sign in.
                    </h4>
                  </div>
                )}

                {!submitted && (
                  <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                    <div className='py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                      <form className='space-y-6'>
                        <div>
                          <label
                            htmlFor='email'
                            className='block text-sm font- text-gray-300'
                          >
                            Email address
                          </label>
                          <div className='mt-1'>
                            <input
                              id='email'
                              name='email'
                              type='email'
                              autoComplete='email'
                              required
                              onChange={(e) => setEmail(e.target.value)}
                              className='text-xl appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 bg-gray-700'
                            />
                            {error && (
                              <div className='text-red-600 text-xl mt-4'>
                                {error}
                              </div>
                            )}
                          </div>
                        </div>

                        <div>
                          <button
                            onClick={signIn}
                            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium transition duration-300 ease-in-out text-gray-700 bg-green-400 hover:bg-green-600 focus:outline-none'
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
