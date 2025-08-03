import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MessageCircle, MoreHorizontal } from "lucide-react"

const chatList = [
  {
    id: 1,
    name: "Anh Nguyen",
    message: "Bạn: 😊 1 phút",
    avatar: "/lovable-uploads/660dcdf4-a599-476a-b3ea-2a63cd993604.png",
    isOnline: true,
    isActive: false
  },
  {
    id: 2,
    name: "Trao Đổi Mua Bán Sv2 🔥 Box 2",
    message: "Phong: =)) 43 phút",
    avatar: "/placeholder.svg",
    isOnline: false,
    isActive: false
  },
  {
    id: 3,
    name: "LỦ ĐA LỦ ĐỦ 🎉🏠",
    message: "Tuấn Anh: :))) 3 giờ",
    avatar: "/placeholder.svg",
    isOnline: false,
    isActive: false
  },
  {
    id: 4,
    name: "KingContent",
    message: "- CHUYÊN LÀ CÓ THẬT: Làm t... 2 ngày",
    avatar: "/placeholder.svg",
    isOnline: false,
    isActive: false
  },
  {
    id: 5,
    name: "Anh Ngoc",
    message: "Gọi giẻ",
    avatar: "/lovable-uploads/660dcdf4-a599-476a-b3ea-2a63cd993604.png",
    isOnline: true,
    isActive: true
  }
]

export const ChatSidebar = () => {
  return (
    <div className="w-80 bg-sidebar-bg border-r border-border flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold text-foreground">Đoạn chat</h1>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <MessageCircle size={20} />
          </Button>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
          <Input 
            placeholder="Tìm kiếm trên Messenger"
            className="pl-10 bg-message-bg border-none text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chatList.map((chat) => (
          <div
            key={chat.id}
            className={`flex items-center gap-3 p-3 mx-2 my-1 rounded-lg cursor-pointer transition-colors duration-200 ${
              chat.isActive 
                ? 'bg-primary/10 border-l-4 border-l-primary' 
                : 'hover:bg-hover-bg'
            }`}
          >
            <div className="relative">
              <Avatar className="w-12 h-12">
                <AvatarImage src={chat.avatar} alt={chat.name} />
                <AvatarFallback className="bg-muted text-muted-foreground">
                  {chat.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              {chat.isOnline && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-sidebar-bg rounded-full"></div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-foreground truncate">
                  {chat.name}
                </h3>
                <Button variant="ghost" size="icon" className="w-6 h-6 text-muted-foreground hover:text-foreground">
                  <MoreHorizontal size={16} />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground truncate">
                {chat.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}