import { ChatSidebar } from '@/components/ChatSidebar';
import { ChatMain } from '@/components/ChatMain';

export default function Home() {
  return (
    <div className="flex h-screen">
      <ChatSidebar />
      <ChatMain />
    </div>
  );
}
