import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: `white`,
  [`& .${treeItemClasses.content}`]: {
    color: "white",
    borderTopLeftRadius: theme.spacing(2),
    borderBottomLeftRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: `purple`,
      color: "white",
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `purple`,
      color: "#ff8000",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 0.5,
            pr: 0,
          }}
        >
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: "white",
              fontSize: 15,
              "&:hover": {
                color: "white",
              },
              "&:visited":{
                color: `#290038`,
              }
            }}
          >
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const SidebarMenu = () => {
  return (
    <TreeView
      aria-label="gmail"
      defaultExpanded={["3"]}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{
        height: "100%",
        flexGrow: 1,
        overflowY: "auto",
        position: "fixed",
        backgroundColor: "#290038",
        paddingTop: 2,
      }}
    >
      <Link to="/">
        <StyledTreeItem
          nodeId="1"
          labelText="Tableau de bord"
          labelIcon={HomeIcon}
          color="#a250f5"
          bgColor="#f3e8fd"
        />
      </Link>
      <Link to="/clients">
        <StyledTreeItem
          nodeId="2"
          labelText="Clients"
          labelIcon={GroupIcon}
          color="#a250f5"
          bgColor="#f3e8fd"
        />
      </Link>

      <StyledTreeItem
        nodeId="3"
        labelText="Administrateurs"
        labelIcon={AdminPanelSettingsIcon}
        color="#a250f5"
        bgColor="#f3e8fd"
      >
        <Link to="/members">
          <StyledTreeItem
            nodeId="5"
            labelText="Tous"
            labelIcon={SupervisorAccountIcon}
            color="#a250f5"
            bgColor="#f3e8fd"
          />
        </Link>

        <Link to="/admins">
          <StyledTreeItem
            nodeId="6"
            labelText="Admin Mycampa"
            labelIcon={AdminPanelSettingsIcon}
            color="#a250f5"
            bgColor="#f3e8fd"
          />
        </Link>

        <Link to="/managers">
          <StyledTreeItem
            nodeId="7"
            labelText="Gestionnaire Etab"
            labelIcon={AdminPanelSettingsIcon}
            color="#ff8000"
            bgColor="#f3e8fd"
          />
        </Link>
      </StyledTreeItem>

      <StyledTreeItem nodeId="4" labelText="Paiements" labelIcon={SchoolIcon} />
    </TreeView>
  );
};

export default SidebarMenu;
