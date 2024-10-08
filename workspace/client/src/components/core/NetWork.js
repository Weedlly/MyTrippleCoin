import React from 'react';
const Network = props => {
  const { value = 0 } = props;
  return (
    <div className=" bg-green-400 grid grid-cols-4 gap-5 rounded-sm">
      <div className="flex justify-center items-center col-span-1">
      </div>
      <div className="flex flex-col col-span-3 py-5 justify-start">
        <p className="w-full text-2xl text-white font-bold">Network</p>
        <p className="w-full break-words mt-5 text-white text-xl">Last block#: {value}</p>
      </div>
    </div>
  );
};

export default Network;
