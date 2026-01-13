"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import VerifyForm from "@/components/forms/VerifyForm";

const VerifyModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-md w-full " >
                {/* Close Button (X) */}
                <DialogClose asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 top-4"
                        onClick={() => setIsOpen(false)}
                    >
                        <X className="h-4 w-4" />
                        <span className="sr-only">إغلاق</span>
                    </Button>
                </DialogClose>

                <DialogHeader>
                    <DialogTitle className="text-center">تأكيد الحساب</DialogTitle>
                </DialogHeader>

                <VerifyForm />
            </DialogContent>
        </Dialog>
    );
};

export default VerifyModal;