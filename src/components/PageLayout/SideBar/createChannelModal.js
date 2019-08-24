import React from "react";
import Modal from "../../Modal";
import Input from "../../FormInput";

const CreateChannelModal = ({ visible, onClose }) => (
  <Modal visible={visible} onClose={onClose} title="Create Channel">
    {Input({
      placeholder: "Channel Name"
    })}

    {Input({
      placeholder: "Purpose of Channel"
    })}

    {Input({
      placeholder: "collaborators"
    })}
  </Modal>
);

export default CreateChannelModal;
