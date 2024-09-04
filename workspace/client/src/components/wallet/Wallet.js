import React, { useState } from 'react';
import { useHistory } from 'react-router';
import walletApi from '../../api/wallet';
import AccessWalletModal from './components/AccessWalletModal';
import CreateWalletModal from './components/CreateWalletModal';
const Wallet = () => {
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenAccess, setIsOpenAccess] = useState(false);
  const history = useHistory();
  const onCreateWallet = () => {
    setIsOpenCreate(true);
  };
  const onAccessWallet = () => {
    setIsOpenAccess(true);
  };

  const accessWallet = async privatekey => {
    const params = {
      pk: privatekey
    };
    try {
      const res = await walletApi.accessWallet(params);
      if (res.status === 'success') {
        history.push('/wallet/dashboard', { privateKey: privatekey });
      }
    } catch (err) {}
  };
  return (
    <div className="w-full h-screen mt-3 flex flex-col items-center ">
      <section className="flex w-1/2 justify-between items-center mb-3">
        <div className="flex flex-col items-center">
          <div className="text-black-800 font-bold text-4xl mb-3">MyEtherWallet</div>
          <p className="text-gray-800 text-base">
          Trusted by millions of users, MyEtherWallet is the first and best open source Ethereum wallet. Create a secure crypto wallet, buy, sell, stake and swap.
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center">
        <div
          className="w-1/4 h-64 grid grid-cols-3 gap-2 p-10 rounded mr-5 cursor-pointer transition ease-in-out transform hover:-translate-y-2"
          onClick={onCreateWallet}
        >
          <div className="col-span-2 flex flex-col justify-between  items-start">
            <p className="text-black font-bold text-2xl">Create A New Wallet</p>
            <p className="text-black font-normal text-sm">
              Generate a new Ethereum wallet. Receive a public key and determine a recovery mechanism.
            </p>
          </div>
        </div>
        <div
          className="w-1/4 h-64 grid grid-cols-3 gap-4 p-10 rounded cursor-pointer transition ease-in-out transform hover:-translate-y-2"
          onClick={onAccessWallet}
        >
          <div className="col-span-2 flex flex-col justify-between items-start">
            <p className="text-black font-bold text-2xl">Access My Wallet</p>
            <p className="text-black font-normal text-sm">Access the blockchain network with your preferred wallet.</p>
          </div>
        </div>
      </section>
      <CreateWalletModal isOpen={isOpenCreate} setIsOpen={setIsOpenCreate} />
      <AccessWalletModal isOpen={isOpenAccess} setIsOpen={setIsOpenAccess} onSubmit={accessWallet} />
    </div>
  );
};

export default Wallet;
