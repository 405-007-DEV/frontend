import useWebSocket from 'react-use-websocket';

// 임시 테스트
const WS_URL = 'ws://127.0.0.1:8000';
const username = 'hj';

export function ChatPage() {
  const { sendJsonMessage } = useWebSocket(WS_URL, {
    queryParams: { username },
  });

  return (
    <>
      <button
        onClick={() => {
          sendJsonMessage({
            message: 'hi',
          });
        }}
      >
        보내기
      </button>
    </>
  );
}
