import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  ClickAwayListener,
  Fade,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  Popper,
} from "@material-ui/core";
import clsx from "clsx";

const cardShadow = `0px 0px 20px 0px rgba(44, 101, 144, 0.1)`;

/* dropdown dùng cho menu option, notification popup */
const dropdownPopperStyles = makeStyles((theme) => ({
  popper: {
    zIndex: theme.zIndex.modal,
  },
  popperPaper: {
    width: 345,
    minWidth: 100,
    maxWidth: "100%",
    maxHeight: "calc(70vh)",
    overflowY: "auto",
    overflowX: "hidden",
    boxShadow: cardShadow,
  },
  popperPaperFreeSize: {
    width: "auto",
  },
  popperPaperOptionSize: {
    width: 250,
  },
  button: {
    // display: 'inline-block',
  },
}));

/* 
chỉ sử dụng để render layout dropdown với popper và button tùy chọn, 
vui lòng không chỉnh sửa gì bên trong.
Các xử lý về action và logic thực hiện ở component trước khi truyền vào dropdownContent
Doc: 
https://material-ui.com/components/popper/#popper
https://material-ui.com/components/click-away-listener/#click-away-listener

Ví dụ: khai báo option như sau
export const commonNotifOptions = [
  {
    icon: CheckIcon,
    primaryText: 'Đánh dấu tất cả đã đọc',
  },
  {
    icon: ReportIcon,
    primaryText: 'Mở trang thông báo',
    secondaryText: 'Đây là dòng mô tả',
    optionProps: {
      component: RouterLink,
      color: 'inherit',
      to: '/Notifications/',
      onClick: () => alert('Có thể truyền hàm khi bấm option này'),
    },
  },
];
*/
export default function DropdownPopper({
  dropdownBtn,
  DropdownButton,
  dropdownContent,
  options,
  /* key custom cho option, vui lòng khai báo option 
  gồm icon và label để hạn chế xài prop này */
  primaryTextKey,
  secondaryTextKey,
  noOptionsText,
  /* các cổng prop custom */
  dropdownBtnProps,
  popperProps,
  popperPapperProps,
  /* quy định kích thước popper, mặc định size của thông báo */
  freeSize,
  optionSize,
  openDropdown,
}) {
  const classes = dropdownPopperStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <Box
          className={classes.button}
          component={DropdownButton || "div"}
          onClick={handleClick}
          {...dropdownBtnProps}
        >
          {dropdownBtn}
        </Box>
        <Popper
          id={id}
          open={openDropdown || open}
          anchorEl={anchorEl}
          placement="bottom-end"
          transition
          disablePortal
          className={classes.popper}
          {...popperProps}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper
                className={clsx(
                  classes.popperPaper,
                  freeSize ? classes.popperPaperFreeSize : undefined,
                  optionSize ? classes.popperPaperOptionSize : undefined
                )}
                {...popperPapperProps}
              >
                <React.Fragment>
                  {dropdownContent || (
                    <List dense>
                      {options &&
                        options.length > 0 &&
                        options.map((option, index) => {
                          const key = index;
                          return (
                            <ListItem
                              key={key}
                              button
                              onClick={handleClose}
                              {...option.optionProps}
                            >
                              {option.icon && (
                                <ListItemIcon>{<option.icon />}</ListItemIcon>
                              )}
                              {option.avatar && (
                                <ListItemIcon>{option.avatar}</ListItemIcon>
                              )}
                              <ListItemText
                                primary={option[primaryTextKey]}
                                secondary={option[secondaryTextKey]}
                              />
                            </ListItem>
                          );
                        })}

                      {/* trường hợp ko có option nào */}
                      {(!options || options.length === 0) && (
                        <ListItem>
                          <ListItemText primary={noOptionsText} />
                        </ListItem>
                      )}
                    </List>
                  )}
                </React.Fragment>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    </ClickAwayListener>
  );
}
DropdownPopper.propTypes = {
  dropdownBtn: PropTypes.node, // nút mở popper
  DropdownButton: PropTypes.elementType, // nút mở popper dạng elementType
  dropdownBtnProps: PropTypes.object, // các props cho nút mở popper
  dropdownContent: PropTypes.node, //  custom nội dung popper thay vì sử dụng option
  options: PropTypes.array, // mảng option (khai báo như sample ở trên)
  primaryTextKey: PropTypes.string, // key custom cho option
  secondaryTextKey: PropTypes.string, // key custom cho option
  noOptionsText: PropTypes.node, // hiển thị khi data null
  popperProps: PropTypes.object, // props cho Popper
  popperPapperProps: PropTypes.object, // props cho Paper bên trong popper
  freeSize: PropTypes.bool, // size tùy ý
  optionSize: PropTypes.bool, // size cho tùy chọn (width 250px)
  openDropdown: PropTypes.bool, // quy định trạng thái đóng/mở của dropdown
};
DropdownPopper.defaultProps = {
  noOptionsText: "Không có tùy chọn nào",
  primaryTextKey: "primaryText",
  secondaryTextKey: "secondaryText",
};

// export const backendSettingsOptions = [
//   {
//     icon: UserIcon,
//     primaryText: 'Hồ sơ cá nhân',
//     optionProps: {
//       component: AtomRouterLink,
//       color: 'inherit',
//       to: '/Backend/BEProfile',
//     },
//   },
//   {
//     icon: LanguageIcon,
//     primaryText: 'Ngôn ngữ',
//   },
//   {
//     icon: LogoutIcon,
//     primaryText: 'Đăng xuất',
//     optionProps: {
//       component: AtomRouterLink,
//       color: 'inherit',
//       to: '/Auth/',
//     },
//   },
// ];
