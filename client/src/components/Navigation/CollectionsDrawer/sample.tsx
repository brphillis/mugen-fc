import {
  FaPeopleGroup,
  FaPlus,
  FaUserLock,
  FaUsersBetweenLines,
} from "react-icons/fa6";
import { PiPaintBrushFill, PiVaultFill } from "react-icons/pi";

export const linksCollection = [
  {
    label: "New Canvas",
    href: "/collections/new-canvas",
    icon: <FaPlus size={22} />,
    group: 1,
  },
  {
    label: "NFT Collection",
    href: "/collections/nft-collection",
    icon: <PiVaultFill size={22} />,
    group: 1,
  },

  {
    label: "All Canvases",
    shortLabel: "All",
    href: "/collections",
    icon: <PiPaintBrushFill size={22} />,
    group: 2,
  },
  {
    label: "Private Canvases",
    shortLabel: "Private",
    href: "/collections/private-canvases",
    icon: <FaUserLock size={22} />,
    group: 2,
  },
  {
    label: "Community Canvases",
    shortLabel: "Community",
    href: "/collections/community-canvases",
    icon: <FaPeopleGroup size={22} />,
    group: 2,
  },
  {
    label: "Public Canvases",
    shortLabel: "Public",
    href: "/collections/public-canvases",
    icon: <FaUsersBetweenLines size={22} />,
    group: 2,
  },

  {
    label: "Add Canvas",
    href: "/collections/admin/add-canvas",
    icon: <PiPaintBrushFill size={22} />,
    group: 3,
    isAdmin: true,
  },
  {
    label: "Edit Canvas",
    href: "/collections/admin/edit-canvas",
    icon: <PiPaintBrushFill size={22} />,
    group: 3,
    isAdmin: true,
  },
];
