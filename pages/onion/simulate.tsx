import type { NextPage } from "next";
import React from "react";
import * as ch from "@chakra-ui/react";
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useRouter } from 'next/router'






const Onion: NextPage = (): JSX.Element => {
  const [socketUrl, _] = React.useState('ws://localhost:8080');
  const router = useRouter()


  const {
    sendMessage,
    lastMessage,
    readyState,
  } = useWebSocket(socketUrl);

  const handleClickSendMessage = React.useCallback(
    () => sendMessage(
      JSON.stringify(
        { "__MESSAGE__": "monty", ...router.query }
        )
    ),
    [sendMessage]
  );

  handleClickSendMessage()

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  const getLastMessage = (message: any) => {
    if (readyState == ReadyState.CONNECTING) return "Connecting..."
    if (readyState == ReadyState.CLOSING) return "Closing..."
    if (readyState == ReadyState.CLOSED) return "CLOSED..."
    if (readyState == ReadyState.UNINSTANTIATED) return "Uninstantiated..."

    if (message == null) return "null"
    let data = JSON.parse(message.data)
    return data['__MESSAGE__']
  }

  return <>
    <ch.Flex w="100vw" h="100vh">
      <ch.HStack w="full" h="full" align="center" >
        <ch.VStack w="full" h="full" align="center" >
          <ch.Spacer />
          <ch.Spinner size='xl' />
          <ch.Text>{lastMessage ? getLastMessage(lastMessage) : null}</ch.Text>
          <ch.Spacer />
          <pre>{JSON.stringify(router.query, null, 4)}</pre>

          <ch.Spacer />
        </ch.VStack>
      </ch.HStack>
    </ch.Flex>
  </>
};

export default Onion;
