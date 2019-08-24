import Modal from "../../Modal";
import Input from "../../FormInput";

const UserInvitaionModal = ({ visible, onClose }) =>
  Modal({
    visible,
    onClose,
    title: "Invite New User",
    children: Input({
      placeholder: "inivite user by Email"
    })
  });

export default UserInvitaionModal;
