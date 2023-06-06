import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function AddEmployee(props) {


  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className="mt-2 block mx-auto bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded"
      >
        +  Add Employee
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="editmodal" className="w-full max-w-sm" 
            onSubmit={(e)=>{
                e.preventDefault();
                console.log("hello from edit employee")
                console.log(name, role,image);
                props.aikAur(name,role,image)}}
          >
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="name"
                >
                  Full Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="name"
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="Role"
                >
                  Role
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="role"
                  type="text"
                  onChange={(e) => {
                    setRole(e.target.value); }}
                />
              </div>
            </div>


            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="Image"
                >
                  Image
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="image"
                  type="text"
                  onChange={(e) => {
                    setImage(e.target.value); }}
                />
              </div>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          {/* <button
            className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
            form="editmodal"
            onClick={handleClose}
          >
            Close
          </button> */}
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            form="editmodal"
            onClick={handleClose}
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;
