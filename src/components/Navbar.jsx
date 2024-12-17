import {Navbar, NavbarBrand, NavbarContent,  Input,  DropdownItem, DropdownTrigger, Dropdown, DropdownMenu,Avatar,
  } from "@nextui-org/react";
import { NavLink, Outlet } from "react-router-dom";
import Nav2 from "./HomePage/Nav2";
  
  
  
  
  export const SearchIcon = ({size = 24,  strokeWidth = 1.5, width, height, ...props }) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={height || size}
        role="presentation"
        viewBox="0 0 24 24"
        width={width || size}
        {...props}
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        
      </svg>
    );
  };
  
   function MyNavbar() {
    return (
      <>
      <Navbar isBordered className="" maxWidth="2xl">
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
           <NavLink to="/"><img src="/logo.png" alt="" /></NavLink>
          </NavbarBrand>
          <NavbarContent >
           <NavLink to="/bellaitalia">BellaITalia</NavLink>
          </NavbarContent>
        </NavbarContent>
  
        <NavbarContent as="div" className="items-center flex lg:flex-row sm:flex-cols-1 " justify="center">
          <NavLink to="restaurants">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search" className="flex items-center justify-center"
          />
          </NavLink>
          <Dropdown placement="center">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="/earth.png"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="restaurant" className="h-14 gap-2">
                <p className="font-semibold">restaurant, hotel, service..../Singapour...</p>
                
              </DropdownItem>
              
              <DropdownItem key="bellaitalia">BellaITalia</DropdownItem>
              
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <button className="bg-secondary text-white rounded-full px-4 py-2">MyFeedback for business</button>
        </NavbarContent>
      </Navbar>
     
      <Nav2/>
      <Outlet/>
      </>
    );
  }
  export default MyNavbar;
  