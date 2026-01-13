"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import VerifyForm from "@/components/forms/VerifyForm";

const VerifyModal = () => {
    return (
        <Dialog open>
            <DialogContent className="sm:max-w-md w-full">
                <DialogHeader>
                    <DialogTitle>تأكيد الحساب</DialogTitle>
                </DialogHeader>

                <VerifyForm />
            </DialogContent>
        </Dialog>
    );
};

export default VerifyModal;
