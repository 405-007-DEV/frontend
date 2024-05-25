import { useRef } from 'react';
import { Icon } from '../Button/Icon';

interface ChatInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isSent: boolean;
}

export function ChatInput({
  placeholder = '메시지를 입력해주세요',
  value,
  onChange,
  onSubmit,
  isSent,
}: ChatInputProps) {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleResizeHeight = () => {
    if (!textAreaRef.current) return;

    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
  };

  const handleSubmit = () => {
    onSubmit();

    if (!textAreaRef.current) return;
    textAreaRef.current.style.height = 'auto';
  };

  const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

  return (
    <div
      className={`text-gr4 b2_medium rounded-[20px] min-h-32 space-x-4  pl-18 pr-8 flex items-center justify-between ${isSent ? 'pointer-events-none bg-gr1' : 'bg-b1'}`}
    >
      <textarea
        ref={textAreaRef}
        maxLength={140}
        placeholder={isSent ? '메시지 창이 비활성화 되었습니다' : placeholder}
        className="bg-transparent flex-1 outline-none resize-none py-8"
        rows={1}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          handleResizeHeight();
        }}
        spellCheck={false}
        onKeyUp={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
          if (!isMobile && e.key === 'Enter' && !e.shiftKey) {
            handleSubmit();
            e.preventDefault();
          }
        }}
        disabled={isSent}
      />
      <div onClick={handleSubmit} className="cursor-pointer">
        <Icon icon="send" size={24} />
      </div>
    </div>
  );
}
