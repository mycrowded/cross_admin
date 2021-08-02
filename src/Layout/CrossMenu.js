import {React} from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@material-ui/core";
import { MenuItemLink, getResources, } from "react-admin";
import DefaultIcon from "@material-ui/icons/ViewList";
import HomeIcon from "@material-ui/icons/Home";
import PinDropIcon from '@material-ui/icons/PinDrop';
import { usePermissions } from 'react-admin';

const CrossMenu = ({ onMenuClick, logout }) => {
    const { loaded, permissions } = usePermissions();
    console.log('perm', permissions);
    const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
    const open = useSelector((state) => state.admin.ui.sidebarOpen);
    const resources = useSelector(getResources);
    return loaded ? (
        <div>
            { <MenuItemLink
                to="/"
                primaryText="Home"
                leftIcon={<HomeIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            /> }
            {resources.map((resource) => (
                <MenuItemLink
                    key={resource.name}
                    to={`/${resource.name}`}
                    primaryText={
                        (resource.options && resource.options.label) || resource.name
                    }
                    leftIcon={resource.icon ? <resource.icon /> : <DefaultIcon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                />
            ))}
            <MenuItemLink
                to="map"
                primaryText="CROSS Locations Map"
                leftIcon={<PinDropIcon />}
                onClick={onMenuClick}
            />

            {isXSmall && logout}
        </div>
    ) : null;
};

export default CrossMenu;