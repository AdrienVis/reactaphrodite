import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElement';
const Sidebar = ({isOpen, toggle} ) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
		<Icon onClick={toggle}>
			<CloseIcon />
		</Icon>
		<SidebarWrapper>
			<SidebarMenu>
				<SidebarLink to="home">
					Home
				</SidebarLink>
				<SidebarLink to="our product">
                                        Our Product
                                </SidebarLink>
				<SidebarLink to="docs">
                                        Docs
                                </SidebarLink>
				<SidebarLink to="blog">
                                        Blog
                                </SidebarLink>
			</SidebarMenu>
			<SideBtnWrap>
				<SidebarRoute to='/signin'>Signin</SidebarRoute>
			</SideBtnWrap>
		</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
