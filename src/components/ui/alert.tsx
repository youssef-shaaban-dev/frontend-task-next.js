// components/ui/alert.tsx
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle, XCircle, Info } from "lucide-react";

const icons = {
  error: XCircle,
  warning: AlertCircle,
  success: CheckCircle,
  info: Info,
};

const variants = {
  error: "bg-red-50 border-red-200 text-red-800 [&>svg]:text-red-600",
  warning: "bg-yellow-50 border-yellow-200 text-yellow-800 [&>svg]:text-yellow-600",
  success: "bg-green-50 border-green-200 text-green-800 [&>svg]:text-green-600",
  info: "bg-blue-50 border-blue-200 text-blue-800 [&>svg]:text-blue-600",
};

interface AlertProps {
  variant?: "error" | "warning" | "success" | "info";
  title?: string;
  message: string;
  className?: string;
  showIcon?: boolean;
}

export const Alert = ({
  variant = "error",
  title,
  message,
  className,
  showIcon = true,
}: AlertProps) => {
  const Icon = icons[variant];

  return (
    <div
      className={cn(
        "rounded-lg border p-4",
        variants[variant],
        className
      )}
      role="alert"
    >
      <div className="flex items-start gap-3">
        {showIcon && <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />}
        <div className="flex-1 space-y-1">
          {title && (
            <h4 className="font-semibold text-sm">{title}</h4>
          )}
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};