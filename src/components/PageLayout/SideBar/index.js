import React from "react";
import { fromJS } from "immutable";
import Sider from "antd/es/layout/Sider";
import Icon from "../../Icon";
import { Logo } from "./styled";
import ListView from "./ListView";
const { useState, lazy, Suspense } = React;

const SidebarView = ({ collapsed, selectedWs }) => {
  const [state, updateHandler] = useState(
    fromJS({
      addingChannel: false,
      invitingUser: false
    })
  );

  const jsState = state.toJS();
  const toggleModal = name => () =>
    updateHandler(state.merge({ [name]: !jsState[name] }));

  const ModalView = jsState.addingChannel
    ? lazy(() => import("./createChannelModal"))
    : lazy(() => import("./userinvitaionModal"));

  return (
    <Sider width="260px" trigger={null} collapsible collapsed={collapsed}>
      <Logo>{selectedWs || <Icon spin type="loading" />}</Logo>
      {ListView({
        title: "Channels",
        onClickAdd: toggleModal("addingChannel"),
        items: [
          {
            key: 1,
            value: "Channel 1",
            iconName: "book"
          },
          {
            key: 2,
            value: "Channel 2",
            iconName: "book"
          },
          {
            key: 3,
            value: "Channel 3",
            iconName: "book"
          }
        ]
      })}

      {ListView({
        title: "Messages",
        onClickAdd: toggleModal("invitingUser"),
        items: [
          {
            key: 1,
            value: "user 1",
            iconName: "user",
            iconSize: 18
          },
          {
            key: 2,
            value: "user 2",
            iconName: "user",
            iconSize: 18,
            iconColor: "#2BAC76"
          },
          {
            key: 3,
            value: "user 3",
            iconName: "user",
            iconSize: 18
          }
        ]
      })}

      {(jsState.addingChannel || jsState.invitingUser) && (
        <Suspense fallback={null}>
          <ModalView
            visible={jsState.addingChannel || jsState.invitingUser}
            onClose={toggleModal(
              jsState.addingChannel ? "addingChannel" : "invitingUser"
            )}
          />
        </Suspense>
      )}
    </Sider>
  );
};

export default SidebarView;
