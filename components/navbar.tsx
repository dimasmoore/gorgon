'use client';

import React, { useState, useMemo } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import NextLink from "next/link";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  CloseIcon,
} from "@/components/icons";

// Define types for props
type BackdropOverlayProps = {
  onClose: () => void;
};

type MobileSidebarProps = {
  onClose: () => void;
  searchInput: React.ReactNode;
  siteConfig: typeof siteConfig;
};

// Mock user data - replace with actual user data in a real application
const userData = {
  name: "Alex NFT",
  type: "Premium",
  coin: "2,500 ETH",
  avatar: "https://i.pravatar.cc/150?img=32", // Example avatar URL
};

// User Profile Dropdown component
const UserProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Profile Button */}
      <button 
        onClick={toggleDropdown}
        className="flex items-center gap-2 p-1 rounded-full border border-green-500/30 hover:border-green-400/60 transition-all duration-300"
        aria-label="User profile"
      >
        <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-green-500/50 shadow-[0_0_10px_rgba(0,255,128,0.3)]">
          <img 
            src={userData.avatar} 
            alt="User avatar" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full"></div>
        </div>
        <div className="hidden md:block">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-green-400">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="fixed inset-0 z-30" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={closeDropdown}
            />
            <motion.div
              className="absolute right-0 mt-2 w-64 rounded-xl overflow-hidden border border-green-500/30 bg-black shadow-[0_0_25px_rgba(0,255,128,0.2)] z-40"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {/* User Info Header */}
              <div className="p-4 border-b border-green-500/30 bg-gradient-to-r from-green-900/20 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500/50 shadow-[0_0_10px_rgba(0,255,128,0.3)]">
                    <img 
                      src={userData.avatar} 
                      alt="User avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-green-300">{userData.name}</p>
                    <p className="text-xs text-green-500/80">View Profile</p>
                  </div>
                </div>
              </div>

              {/* User Details */}
              <div className="p-3 space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-green-900/20 transition-colors">
                  <span className="text-green-400 text-sm">Type</span>
                  <span className="text-green-200 font-medium bg-green-900/40 px-2 py-1 rounded-md text-xs">{userData.type}</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-green-900/20 transition-colors">
                  <span className="text-green-400 text-sm">Coin</span>
                  <span className="text-green-200 font-medium flex items-center gap-1">
                    <span className="inline-block w-3 h-3 rounded-full bg-green-500 shadow-[0_0_5px_rgba(0,255,128,0.7)]"></span>
                    {userData.coin}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="p-3 border-t border-green-500/30">
                <button 
                  className="w-full py-2 px-3 rounded-lg text-sm text-green-200 hover:bg-green-900/30 transition-colors flex items-center justify-center gap-2"
                  onClick={closeDropdown}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Sign Out
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// Component definitions moved outside Navbar
const BackdropOverlay = ({ onClose }: BackdropOverlayProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
    onClick={onClose}
    aria-hidden="true"
  />
);

const MobileSidebar = ({ onClose, searchInput, siteConfig: currentSiteConfig }: MobileSidebarProps) => (
  <motion.div
    initial={{ x: "-100%" }}
    animate={{ x: 0 }}
    exit={{ x: "-100%" }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
    className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-gradient-to-b from-black via-black to-green-950 border-r border-green-500/30 z-50 flex flex-col shadow-[0_0_25px_rgba(0,255,128,0.3)] overflow-hidden"
    aria-modal="true"
    role="dialog"
  >
    {/* NFT-style header with glow effect */}
    <div className="relative flex items-center justify-between p-5 border-b border-green-500/30 bg-black">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-transparent opacity-30"></div>
      <NextLink href="/" className="flex items-center gap-3 z-10" onClick={onClose}>
        <img 
          src="/gorgon_logo.svg" 
          alt="Gorgon Logo" 
          className="h-8 w-8 text-green-400 filter drop-shadow-[0_0_8px_rgba(0,255,128,0.8)]" 
        />
        <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 filter drop-shadow-[0_0_2px_rgba(0,255,128,0.5)]">GORGON</span>
      </NextLink>
      <button
        aria-label="Close menu"
        onClick={onClose}
        className="text-green-400 hover:text-green-200 p-2 z-10 rounded-full hover:bg-green-900/30 transition-all duration-300"
      >
        <CloseIcon className="h-6 w-6 filter drop-shadow-[0_0_4px_rgba(0,255,128,0.6)]" />
      </button>
    </div>

    {/* User Profile Section - Added */}
    <div className="p-5 border-b border-green-500/30 bg-gradient-to-r from-green-900/20 to-transparent">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-green-500/50 shadow-[0_0_15px_rgba(0,255,128,0.4)]">
          <img 
            src={userData.avatar} 
            alt="User avatar" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full"></div>
        </div>
        <div>
          <p className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">{userData.name}</p>
          <div className="flex items-center mt-1">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(0,255,128,0.7)] mr-2"></span>
            <span className="text-green-400 text-sm">{userData.coin}</span>
          </div>
        </div>
      </div>
      
      {/* User Type Badge */}
      <div className="mt-4 flex">
        <span className="text-xs font-medium bg-green-900/60 border border-green-500/30 text-green-300 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(0,255,128,0.15)]">
          {userData.type} Member
        </span>
      </div>
    </div>

    {/* Navigation with NFT styling */}
    <nav className="flex-grow p-5 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-black">
      {currentSiteConfig.navMenuItems.map((item, index) => (
        <NextLink
          key={`${item.href}-${index}`}
          href={item.href}
          onClick={onClose}
          className={clsx(
            "flex items-center p-3 rounded-md text-base font-medium transition-all duration-300",
            "border border-transparent hover:border-green-500/30 hover:shadow-[0_0_15px_rgba(0,255,128,0.15)]",
            {
              "text-green-300 bg-gradient-to-r from-green-900/40 to-transparent": index === 2,
              "text-red-400 hover:text-red-300 hover:bg-red-900/20": index === currentSiteConfig.navMenuItems.length - 1,
              "text-green-400 hover:text-green-200 hover:bg-green-900/20": index !== 2 && index !== currentSiteConfig.navMenuItems.length - 1,
            }
          )}
        >
          <div className="w-1 h-1 rounded-full bg-green-500 mr-3 shadow-[0_0_8px_rgba(0,255,128,0.8)]"></div>
          {item.label}
        </NextLink>
      ))}
    </nav>

    {/* Footer with NFT styling */}
    <div className="p-5 border-t border-green-500/30 bg-black/50">
      <Button
        isExternal
        as={Link}
        href={currentSiteConfig.links.sponsor}
        className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-black hover:from-green-500 hover:to-emerald-400 text-sm font-semibold shadow-[0_0_15px_rgba(0,255,128,0.3)] transition-all duration-300"
        startContent={<HeartFilledIcon className="text-black" />}
        variant="flat"
        onClick={onClose}
      >
        Sponsor
      </Button>
      
      {/* Social icons with NFT styling */}
      <div className="flex justify-center gap-5 mt-5">
        <Link
          isExternal
          aria-label="Twitter"
          href={currentSiteConfig.links.twitter}
          className="text-green-400 hover:text-green-200 hover:scale-110 transition-all duration-300"
        >
          <TwitterIcon className="h-5 w-5 filter drop-shadow-[0_0_4px_rgba(0,255,128,0.6)]" />
        </Link>
        <Link
          isExternal
          aria-label="Discord"
          href={currentSiteConfig.links.discord}
          className="text-green-400 hover:text-green-200 hover:scale-110 transition-all duration-300"
        >
          <DiscordIcon className="h-5 w-5 filter drop-shadow-[0_0_4px_rgba(0,255,128,0.6)]" />
        </Link>
        <Link
          isExternal
          aria-label="Github"
          href={currentSiteConfig.links.github}
          className="text-green-400 hover:text-green-200 hover:scale-110 transition-all duration-300"
        >
          <GithubIcon className="h-5 w-5 filter drop-shadow-[0_0_4px_rgba(0,255,128,0.6)]" />
        </Link>
      </div>
    </div>
  </motion.div>
);

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Add a specific close function to ensure state is set to false
  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  // Memoize searchInput to ensure stable prop for MobileSidebar
  const searchInputNode = useMemo(() => (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper:
          "bg-black border border-green-500/30 hover:border-green-400/50 shadow-[0_0_10px_rgba(0,255,128,0.15)] transition-all duration-300",
        input: "text-sm text-green-300 placeholder-green-700",
      }}
      endContent={
        <Kbd
          className="hidden lg:inline-block text-green-400 border-green-700/50 bg-black"
          keys={["command"]}
        >
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search NFTs..."
      startContent={
        <SearchIcon className="text-base text-green-500 pointer-events-none flex-shrink-0 filter drop-shadow-[0_0_4px_rgba(0,255,128,0.4)]" />
      }
      type="search"
    />
  ), []);

  return (
    <>
      <HeroUINavbar 
        maxWidth="xl" 
        position="sticky" 
        className="bg-gradient-to-r from-black via-black to-green-950 border-b border-green-500/30 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-30"
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-2"
              href="/"
            >
              <img 
                src="/gorgon_logo.svg" 
                alt="Gorgon Logo" 
                className="h-8 w-8 text-green-400 filter drop-shadow-[0_0_8px_rgba(0,255,128,0.8)]" 
              />
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 filter drop-shadow-[0_0_2px_rgba(0,255,128,0.5)]">GORGON</p>
            </NextLink>
          </NavbarBrand>
          <ul className="hidden lg:flex gap-5 justify-start ml-5">
            {siteConfig.navItems.map((item, index) => (
              <NavbarItem key={`${item.href}-${index}`}>
                <NextLink
                  className={clsx(
                    "text-green-400 hover:text-green-200 transition-all duration-300 px-2 py-1 rounded-md hover:bg-green-900/20 border border-transparent hover:border-green-500/30",
                    "data-[active=true]:text-green-200 data-[active=true]:font-medium data-[active=true]:bg-green-900/30 data-[active=true]:border-green-500/30"
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden lg:flex">{searchInputNode}</NavbarItem>
          <NavbarItem className="hidden md:flex">
            <Button
              isExternal
              as={Link}
              className="bg-gradient-to-r from-green-600 to-emerald-500 text-black hover:from-green-500 hover:to-emerald-400 text-sm font-semibold shadow-[0_0_15px_rgba(0,255,128,0.3)] transition-all duration-300 mr-4"
              href={siteConfig.links.sponsor}
              startContent={<HeartFilledIcon className="text-black" />}
              variant="flat"
            >
              Sponsor
            </Button>
          </NavbarItem>
          
          {/* User Profile Dropdown */}
          <NavbarItem>
            <UserProfileDropdown />
          </NavbarItem>
        </NavbarContent>

        {/* Custom mobile menu toggle */}
        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          {/* User Profile on Mobile */}
          <UserProfileDropdown />
          
          {/* Custom toggle button that we fully control */}
          <button
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={handleMobileMenuToggle}
            className="text-green-400 hover:text-green-200 transition-all duration-300 ml-2 p-1"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_0_4px_rgba(0,255,128,0.6)]">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_0_4px_rgba(0,255,128,0.6)]">
                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </NavbarContent>
      </HeroUINavbar>

      {/* Animated Mobile Sidebar and Backdrop */}
      <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
          <React.Fragment key="mobile-menu-group">
            <BackdropOverlay onClose={handleMobileMenuClose} />
            <MobileSidebar
              onClose={handleMobileMenuClose}
              searchInput={searchInputNode}
              siteConfig={siteConfig}
            />
          </React.Fragment>
        )}
      </AnimatePresence>
    </>
  );
};
