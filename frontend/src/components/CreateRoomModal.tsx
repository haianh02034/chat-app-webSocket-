import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';
import axios from 'axios';

interface CreateRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRoomCreated: () => void;
}

const CreateRoomModal: React.FC<CreateRoomModalProps> = ({ isOpen, onClose, onRoomCreated }) => {
  const [roomName, setRoomName] = useState('');
  const [memberIds, setMemberIds] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userIdArray = memberIds.split(',').map(id => id.trim()).filter(id => id.length > 0);
    
    try {
      await axios.post('http://localhost:3000/rooms/create', {
        name: roomName || '',
        members: userIdArray
      }, { withCredentials: true });

      alert('Tạo phòng thành công');
      setRoomName('');
      setMemberIds('');
      onClose();
      onRoomCreated();
    } catch (error) {
      console.error('Error creating room:', error);
      alert('Tạo phòng thất bại');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <Card className="relative w-full max-w-md mx-4 shadow-2xl border-0 bg-card">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-foreground">
              Tạo phòng chat
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-muted"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="roomName" className="text-sm font-medium text-foreground">
                Tên nhóm (tùy chọn)
              </Label>
              <Input
                id="roomName"
                type="text"
                placeholder="Nhập tên nhóm chat..."
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="userIds" className="text-sm font-medium text-foreground">
                ID người dùng <span className="text-destructive">*</span>
              </Label>
              <Input
                id="userIds"
                type="text"
                placeholder="Nhập ID người dùng (ngăn cách bằng dấu phẩy)"
                value={memberIds}
                onChange={(e) => setMemberIds(e.target.value)}
                className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                required
              />
              <p className="text-xs text-muted-foreground">
                Ví dụ: user1, user2, user3
              </p>
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200"
                disabled={!memberIds.trim()}
              >
                Tạo phòng
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1 border-border hover:bg-muted transition-colors duration-200"
                onClick={onClose}
              >
                Hủy bỏ
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateRoomModal;
