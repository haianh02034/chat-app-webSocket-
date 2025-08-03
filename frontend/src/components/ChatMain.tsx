import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Video, Info, Send, Paperclip, Smile, ThumbsUp } from "lucide-react"

const messages = [
  {
    id: 1,
    sender: "Anh Ngoc",
    content: "Gọi giẻ",
    time: "21:47 17 Tháng 7, 2025",
    isMe: false
  },
  {
    id: 2,
    sender: "me",
    content: "Em ngủ chưa a",
    time: "23:29 17 Tháng 7, 2025",
    isMe: true
  },
  {
    id: 3,
    sender: "Anh Ngoc", 
    content: "Anh hỏi làm gì",
    time: "",
    isMe: false
  }
]

export const ChatMain = () => {
  return (
    <div className="flex-1 flex flex-col bg-chat-bg">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-sidebar-bg">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/lovable-uploads/660dcdf4-a599-476a-b3ea-2a63cd993604.png" alt="Anh Ngoc" />
            <AvatarFallback className="bg-muted text-muted-foreground">AN</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold text-foreground">Anh Ngoc</h2>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Đang hoạt động</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-blue-primary hover:bg-hover-bg">
            <Phone size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-blue-primary hover:bg-hover-bg">
            <Video size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-hover-bg">
            <Info size={20} />
          </Button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex items-start gap-2 ${message.isMe ? 'justify-end' : 'justify-start'}`}>
            {!message.isMe && (
              <Avatar className="w-7 h-7">
                <AvatarImage src="/lovable-uploads/660dcdf4-a599-476a-b3ea-2a63cd993604.png" alt={message.sender} />
                <AvatarFallback className="bg-muted text-muted-foreground text-xs">AN</AvatarFallback>
              </Avatar>
            )}
            
            <div className={`max-w-xs lg:max-w-md ${message.isMe ? 'order-first' : ''}`}>
              {message.time && (
                <p className="text-xs text-muted-foreground text-center mb-2">{message.time}</p>
              )}
              <div
                className={`px-4 py-2 rounded-2xl ${
                  message.isMe
                    ? 'bg-primary text-primary-foreground ml-auto'
                    : 'bg-message-bg text-foreground'
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* File Transfer Message */}
        <div className="flex justify-center">
          <div className="bg-message-bg rounded-2xl p-4 max-w-sm">
            <div className="bg-background rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-blue-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Paperclip className="text-blue-primary" size={24} />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Chuyển khoản thành công</h4>
              <p className="text-2xl font-bold text-foreground mb-1">5,000,000 VND</p>
              <p className="text-sm text-muted-foreground mb-3">Nội dung: 17052025</p>
              
              <div className="text-left space-y-1 text-xs text-muted-foreground mb-3">
                <p><span className="font-medium">NGUYEN NGOC ANH</span></p>
                <p>Tài khoản hưởng thụ: ****8765</p>
                <p>***************789</p>
                <p>NGUYEN HOANG CHAU ngọc***</p>
              </div>
              
              <div className="flex justify-between text-xs text-muted-foreground mb-3">
                <span>Câu hỏi</span>
                <span>24 MB</span>
                <span>Lan 2/5</span>
              </div>
              
              <div className="bg-red-600 text-white text-xs py-1 px-2 rounded mb-2">
                Liên hệ ngân hàng xử lý
              </div>
              
              <p className="text-xs text-muted-foreground">Thao tác gồm giao dịch trực:</p>
            </div>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-border bg-sidebar-bg">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Paperclip size={20} />
          </Button>
          
          <div className="flex-1 relative">
            <Input
              placeholder="Aa"
              className="pr-20 bg-message-bg border-none rounded-full text-foreground placeholder:text-muted-foreground"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
              <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-foreground">
                <Smile size={16} />
              </Button>
            </div>
          </div>
          
          <Button size="icon" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
            <ThumbsUp size={16} />
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground text-center mt-2">
          Hiện không liên lạc được với người này trên Messenger.
        </p>
      </div>
    </div>
  )
}