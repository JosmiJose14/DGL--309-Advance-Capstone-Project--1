import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
  {
    title: "Style Elements",
    path: "/style-elements/typography",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "Typography",
        path: "/style-elements/typography",
        icon: <IoIcons.IoIosTrophy />,
      },
      {
        title: "Colors",
        path: "/style-elements/colors",
        icon: <IoIcons.IoIosColorFill />,
      },
      {
        title: "Images",
        path: "/style-elements/images",
        icon: <IoIcons.IoIosImage />,
      },
    ],
  },
  {
    title: "Navigation",
    path: "/navigation/navigations",
    icon: <IoIcons.IoMdNavigate />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Navbar",
        path: "/navigation/navigations",
        icon: <IoIcons.IoIosNavigate />,
      },
      {
        title: "Sub Menu",
        path: "/navigation/navSubmenu",
        icon: <IoIcons.IoIosMenu />,
      },
      {
        title: "Bread crumbs",
        path: "/navigation/navbreadcrumbs",
        icon: <IoIcons.IoIosStopwatch/>,
      }
    ],
  },
  {
    title: "Forms",
    path: "/forms",
    icon: <FaIcons.FaWpforms />,
 
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />
  },
  {
    title: "Buttons",
    path: "/button",
    icon: <FaIcons.FaInbox />,
  },
  {
    title: "List",
    path: "/list",
    icon: <FaIcons.FaList />,
  },
  {
    title: "Components",
    path: "/components/accordian",
    icon: <IoIcons.IoIosInfinite />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
    subNav: [
      {
        title: "Accordian",
        path: "/components/accordian",
        icon: <IoIcons.IoIosArrowDropdownCircle />,
        cName: "sub-nav",
      },
      {
        title: "Carousel",
        path: "/components/carousel",
        icon: <IoIcons.IoIosImages />,
        cName: "sub-nav",
      },
      {
        title: "Table",
        path: "/components/table",
        icon: <IoIcons.IoIosTabletLandscape />,
        cName: "sub-nav",
      },
      {
        title: "Card",
        path: "/components/card",
        icon: <IoIcons.IoIosCard />,
        cName: "sub-nav",
      },
    ],
  }
];