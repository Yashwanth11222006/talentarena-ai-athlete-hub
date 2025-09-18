import React from 'react';
import { useToast, Toast as ToastType } from '@/hooks/useToast';
import { Card } from '@/components/ui/card';
import { X, CheckCircle, XCircle, Info, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ToastIcon = ({ type }: { type: ToastType['type'] }) => {
  switch (type) {
    case 'success':
      return <CheckCircle className="h-5 w-5 text-green-600" />;
    case 'error':
      return <XCircle className="h-5 w-5 text-red-600" />;
    case 'warning':
      return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
    case 'info':
    default:
      return <Info className="h-5 w-5 text-blue-600" />;
  }
};

const Toast = ({ toast, onRemove }: { toast: ToastType; onRemove: (id: string) => void }) => {
  return (
    <Card className="p-4 shadow-lg border-l-4 border-l-primary animate-in slide-in-from-right-full">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <ToastIcon type={toast.type} />
          <div className="flex-1">
            <h4 className="font-semibold text-sm">{toast.title}</h4>
            {toast.description && (
              <p className="text-sm text-muted-foreground mt-1">{toast.description}</p>
            )}
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRemove(toast.id)}
          className="h-auto p-1"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export const ToastProvider = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onRemove={removeToast} />
      ))}
    </div>
  );
};