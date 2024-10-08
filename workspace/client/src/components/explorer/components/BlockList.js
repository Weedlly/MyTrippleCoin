import React from 'react';
import moment from 'moment';
const BlockItem = ({ item = {} }) => {
  return (
    <tr>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
          <div class="">
            <p class="text-gray-900 whitespace-no-wrap">{item.index}</p>
          </div>
        </div>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{moment.unix(item.timestamp).fromNow()}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{item.data.length}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span aria-hidden="true" class="absolute inset-0 opacity-50 rounded-full"></span>
          <span class="relative">{item.nonce}</span>
        </span>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-0">
        <p class="text-gray-900 whitespace-no-wrap truncate">{item.hash}</p>
      </td>
    </tr>
  );
};

const BlockList = props => {
  const { data = [] } = props;
  return (
    <div className="container w-full mx-auto py-8">
      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                Block#
              </th>
              <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                Created at
              </th>
              <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                Transaction length
              </th>
              <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                nonce
              </th>
              <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                hash
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 && data.map(item => (
              <BlockItem key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlockList;
