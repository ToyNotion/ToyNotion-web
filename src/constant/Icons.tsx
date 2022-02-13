import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaCommentDots } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons/lib';

const DockbarConfig: IconBaseProps = { size: '1.5rem' };
const LogoutConfig: IconBaseProps = { size: '1.2rem', color: 'white' };

const Icons = () => {
    return null;
};
export const HomeIcon = () => <FaHome {...DockbarConfig} />;
export const ChatIcon = () => <FaCommentDots {...DockbarConfig} />;
export const SearchIcon = () => <FaSearch {...DockbarConfig} />;
export const MypageIcon = () => <FaUserAlt {...DockbarConfig} />;
export const LogoutIcon = () => <FaSignOutAlt {...LogoutConfig} />;

export default Icons;