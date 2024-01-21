"use client";

import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useState } from "react";

import { useModal } from "@/hooks/use-modal-store";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { Check, Copy, RefreshCw } from "lucide-react";

export const MembersModal = () => {
  const { isOpen, onClose, type, data, onOpen } = useModal();

  const { server } = data;

  const isModalOpen = isOpen && type === "members";
  const inviteUrl = `${origin}/invite/${server?.inviteCode}`;

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Invite Friends
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            {server?.members?.length} Memeber
          </DialogDescription>
        </DialogHeader>
        Hello
      </DialogContent>
    </Dialog>
  );
};
