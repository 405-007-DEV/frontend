import { Icon } from '../Button/Icon';

interface ChatInputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
  return (
    <div
      className={`text-gr4 b2_medium rounded-[100px] min-h-32 space-x-4  pl-18 pr-8 flex items-center justify-between ${isSent ? 'pointer-events-none bg-gr1' : 'bg-b1'}`}
    >
      <textarea
        maxLength={140}
        placeholder={isSent ? '메시지 창이 비활성화 되었습니다' : placeholder}
        className="bg-transparent flex-1 outline-none resize-none min-h-0 py-8"
        rows={1}
        value={value}
        onChange={onChange}
        spellCheck={false}
        onKeyUp={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            onSubmit();
            e.preventDefault();
          }
        }}
        disabled={isSent}
      />
      <div onClick={onSubmit} className="cursor-pointer">
        <Icon icon="send" size={24} />
      </div>
    </div>
  );
}
