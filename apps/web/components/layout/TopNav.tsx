"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { 
  Menu, 
  Home, 
  FileText, 
  Building2, 
  Shield, 
  ScrollText, 
  User,
  X 
} from "lucide-react";

export function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-4">
        
        {/* Logo Area */}
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-semibold tracking-tight hover:opacity-80 transition">
            Institutional Platform
          </Link>
        </div>

        {/* Center Navigation (Public Links) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/explore" className="hover:text-slate-900 transition-colors">
            Explore
          </Link>
          <Link href="/archive" className="hover:text-slate-900 transition-colors">
            Archive
          </Link>
          <Link href="/institutions" className="hover:text-slate-900 transition-colors">
            Institutions
          </Link>
          <Link href="/governance" className="hover:text-slate-900 transition-colors">
            Governance
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <input
            placeholder="Search records"
            className="hidden lg:block w-48 rounded-md border px-3 py-1.5 text-sm focus:outline-none focus:border-slate-400 transition-colors"
          />

          {/* Profile Link */}
          <Link
            href="/app/profile"
            className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            Your profile
          </Link>

          {/* WORKSPACE TOGGLE MENU */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
                isOpen 
                  ? "bg-slate-900 text-white border-slate-900" 
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
              }`}
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
              <span>Workspace</span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 rounded-md border bg-white p-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  My Workspace
                </div>
                
                <nav className="space-y-1">
                  <Link 
                    href="/app/dashboard" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  >
                    <Home size={16} className="text-slate-400" /> Dashboard
                  </Link>
                  <Link 
                    href="/app/submissions" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  >
                    <FileText size={16} className="text-slate-400" /> Submissions
                  </Link>
                  <Link 
                    href="/app/institutions" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  >
                    <Building2 size={16} className="text-slate-400" /> Institutions
                  </Link>
                  <Link 
                    href="/app/governance" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  >
                    <Shield size={16} className="text-slate-400" /> Governance
                  </Link>
                  <Link 
                    href="/app/audit-log" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  >
                    <ScrollText size={16} className="text-slate-400" /> Audit Log
                  </Link>
                  <div className="my-1 border-t border-slate-100"></div>
                  <Link 
                    href="/app/profile" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  >
                    <User size={16} className="text-slate-400" /> Profile Settings
                  </Link>
                </nav>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}