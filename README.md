# MyTrippleCoin

#start

#server

yarn start:server    
PORT=4001 P2P_PORT=6001 yarn dev:server  

#client
export NODE_OPTIONS=--openssl-legacy-provider
yarn start:client                     


export NODE_OPTIONS=--openssl-legacy-provider
PORT=3001 RECT_APP_API_PORT=4001 yarn dev:client

