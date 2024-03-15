import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeAllUsers } from "../store/slices/userSlice";


const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteUsers = () => {
    console.log("hi");
    dispatch(removeAllUsers());
  };

  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={deleteUsers}>
        clear users
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;

export default DeleteAllUser;
