import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false)
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I Accept</Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus
        sapien euismod urna bibendum euismod. Sed vulputate nulla eget tortor
        gravida, vel volutpat felis laoreet. Donec efficitur ante in efficitur
        condimentum. Fusce luctus libero arcu, ac tempus mauris congue ac. Nunc
        scelerisque quam id consequat dapibus. Duis bibendum eros quis magna
        tempor dignissim. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Aliquam faucibus massa ac
        ligula fermentum egestas. Morbi ac purus in diam laoreet varius.
        Maecenas tristique aliquam est, et mollis lacus consequat bibendum.
        Nullam commodo in ligula et interdum. Aliquam lobortis viverra purus ut
        scelerisque. Phasellus mi risus, consequat quis massa vitae, blandit
        faucibus felis. Morbi quis vehicula est, eu consectetur arcu. Etiam at
        enim nec enim aliquam efficitur. Maecenas imperdiet eget dui eget
        placerat.
      </p>

      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
