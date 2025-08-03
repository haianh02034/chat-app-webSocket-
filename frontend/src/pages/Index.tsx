import { ChatSidebar } from "@/components/ChatSidebar"
import { ChatMain } from "@/components/ChatMain"
import { UserSidebar } from "@/components/UserSidebar"

const Index = () => {
  return (
    <div className="h-screen bg-background flex overflow-hidden">
      <ChatSidebar />
      <ChatMain />
      <UserSidebar />
    </div>
  );
};

export default Index;
