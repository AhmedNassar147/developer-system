import React from "react";
import Modal from "antd/lib/modal/Modal";
import "./index.css";

const CustomizedModal = ({
  visible,
  children,
  title = "Title",
  onClose,
  okText = "Save",
  cancelText = "Cancel",
  width = 400,
  maskClosable = true,
  isRTl
}) => (
  <Modal
    visible={visible}
    title={title}
    okText={okText}
    cancelText={cancelText}
    destroyOnClose
    className={isRTl ? "rightContainer" : undefined}
    onCancel={onClose}
    centered
    width={width}
    maskClosable={maskClosable}
  >
    {children}
  </Modal>
);

export default CustomizedModal;
