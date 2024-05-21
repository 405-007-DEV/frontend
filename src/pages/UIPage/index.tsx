import { Button } from '@/components/ui/button';

export function UIPage() {
  return (
    <div className="space-y-2">
      <Button variant={'default'} className="w-full">
        안녕
      </Button>
      <Button variant={'outline'} className="w-full">
        안녕
      </Button>
      <Button disabled variant={'disabled'} className="w-full">
        안녕
      </Button>
    </div>
  );
}
