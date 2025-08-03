import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  User, 
  Bell, 
  Search, 
  Settings, 
  Shield, 
  FileText, 
  HelpCircle,
  ChevronRight,
  Lock
} from "lucide-react"

const menuItems = [
  {
    icon: User,
    label: "Trang cá nhân",
    description: ""
  },
  {
    icon: Bell,
    label: "Tắt thông báo",
    description: ""
  },
  {
    icon: Search,
    label: "Tìm kiếm",
    description: ""
  },
  {
    icon: Settings,
    label: "Thông tin về đoạn chat",
    description: ""
  },
  {
    icon: Settings,
    label: "Tùy chỉnh đoạn chat",
    description: ""
  },
  {
    icon: FileText,
    label: "File phương tiện & file",
    description: ""
  },
  {
    icon: HelpCircle,
    label: "Quyền riêng tư và hỗ trợ",
    description: ""
  }
]

export const UserSidebar = () => {
  return (
    <div className="w-80 bg-sidebar-bg border-l border-border flex flex-col h-full">
      {/* User Profile Header */}
      <div className="p-6 text-center border-b border-border">
        <div className="relative inline-block mb-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src="/lovable-uploads/660dcdf4-a599-476a-b3ea-2a63cd993604.png" alt="Anh Ngoc" />
            <AvatarFallback className="bg-muted text-muted-foreground text-2xl">AN</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-sidebar-bg rounded-full"></div>
        </div>
        
        <h2 className="text-xl font-semibold text-foreground mb-1">Anh Ngoc</h2>
        <div className="flex items-center justify-center gap-2">
          <Badge variant="secondary" className="bg-message-bg text-muted-foreground">
            <Lock size={12} className="mr-1" />
            Được mã hóa đầu cuối
          </Badge>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-1">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-between h-12 px-4 text-foreground hover:bg-hover-bg rounded-lg group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-message-bg rounded-full flex items-center justify-center group-hover:bg-hover-bg transition-colors">
                  <item.icon size={16} className="text-muted-foreground" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              <ChevronRight size={16} className="text-muted-foreground" />
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}