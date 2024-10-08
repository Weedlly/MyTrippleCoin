import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const AccessWalletModal = props => {
  const { isOpen, setIsOpen, onSubmit } = props;
  const [privateKey, setPrivateKey] = useState('');
  const [error, setError] = useState('');
  const closeModal = () => {
    setError('');
    setIsOpen(false);
  };

  const onSubmitForm = async () => {
    if (privateKey === '') {
      setError('Empty field!');
      return;
    }
    if (privateKey.length !== 64) {
      setError('Wrong private key');
      return;
    }
    await onSubmit(privateKey);
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                Your Private key
              </Dialog.Title>
              <div className="mt-2 flex flex-col">
                <div class="mb-3 pt-0">
                  <input
                    type="text"
                    onChange={({ target }) => setPrivateKey(target.value)}
                    placeholder="Input private key"
                    class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  />
                </div>
              </div>
              {error.length > 0 && <div className="text-red-500 text-sm">Error: {error}</div>}
              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={onSubmitForm}
                >
                  Access
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AccessWalletModal;
