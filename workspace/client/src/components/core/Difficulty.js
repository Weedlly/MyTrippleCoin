import React from 'react';
import NetworkIcon from '../../assets/network.svg';
const Difficulty = props => {
  const { value = 0 } = props;
  return (
    <div className="grid grid-cols-4 gap-5 rounded-sm">
      <div className="flex justify-center items-center col-span-1">
      </div>
      <div className="flex flex-col col-span-3 py-5 justify-center">
        <p className="w-full text-2xl text-black font-bold">Network</p>
        <p className="w-full break-words mt-5 font-bold text-black text-xl"> {value}</p>
      </div>
    </div>
  );
};

export default Difficulty;
