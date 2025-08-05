import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MessageCircle, MoreHorizontal, Plus } from "lucide-react"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { getMyRooms } from '../api/rooms';
import CreateRoomModal from './CreateRoomModal';

export const ChatSidebar = () => {
  const [rooms, setRooms] = useState([]);
  const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);

  const fetchRooms = async () => {
    try {
      const data = await getMyRooms();
      setRooms(data);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleRoomCreated = () => {
    fetchRooms(); // Refresh rooms after a new one is created
  };

  return (
    <div className="w-80 bg-sidebar-bg border-r border-border flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold text-foreground">Đoạn chat</h1>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" onClick={() => setShowCreateRoomModal(true)}>
            <Plus size={20} />
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
        {rooms.map((room: any) => (
          <div
            key={room._id}
            className={`flex items-center gap-3 p-3 mx-2 my-1 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-hover-bg`}
          >
            <div className="relative">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/placeholder.svg" alt={room.name || room.members.map((m: any) => m.username).join(', ')} />
                <AvatarFallback className="bg-muted text-muted-foreground">
                  {(room.name || room.members[0]?.username || 'Room').charAt(0)}
                </AvatarFallback>
              </Avatar>
              {/* {chat.isOnline && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-sidebar-bg rounded-full"></div>
              )} */}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-foreground truncate">
                  {room.name || room.members.map((m: any) => m.username).join(', ')}
                </h3>
                <Button variant="ghost" size="icon" className="w-6 h-6 text-muted-foreground hover:text-foreground">
                  <MoreHorizontal size={16} />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground truncate">
                {/* Display last message or members */}
                {room.members.map((m: any) => m.username).join(', ')}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Logout Button */}
      <div className="p-4 border-t border-border">
        <LogoutButton />
      </div>

      {showCreateRoomModal && (
        <CreateRoomModal isOpen={showCreateRoomModal} onClose={() => setShowCreateRoomModal(false)} onRoomCreated={handleRoomCreated} />
      )}
    </div>
  )
}

const LogoutButton = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <Button 
      variant="destructive" 
      className="w-full"
      onClick={handleLogout}
    >
      Đăng xuất
    </Button>
  );
};
