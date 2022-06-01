import { Link, Navigate } from "react-router-dom";
import { Button, Navbar, Container, Offcanvas, Card, Row, Col, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { addUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({});
  const [isRefresh, setIsRefresh] = useState(false);
  const [post, setPost] = useState([]);
  const [postToDelete, setPostToDelete] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setPostToDelete(null);
    setShowModal(false)
  };

  const handleShowModal = (e, post) => {
    console.log("ini log");
    e.preventDefault();
    setPostToDelete(post);
    setShowModal(true)
  };


  useEffect(() => {

    const validateLogin = async () => {
      try {
        // Check status user login
        // 1. Get token from localStorage
        const token = localStorage.getItem("token");

        // 2. Check token validity from API
        const currentUserRequest = await axios.get(
          "http://localhost:8087/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const currentUserResponse = currentUserRequest.data;

        if (currentUserResponse.status) {
          dispatch(
            addUser({
              user: currentUserResponse.data.user,
              token: token,
            })
          )
          setUser(currentUserResponse.data.user);
        }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    validateLogin();
    posts();
    setIsRefresh(false);
  }, [isRefresh]);

  const logout = () => {
    localStorage.removeItem("token");

    setIsLoggedIn(false);
    setUser({});
  };

  const posts = async () => {
    try {
      const dataPosts = await axios.get(
        `http://localhost:8087/api/posts`
      )

      const payloadData = await dataPosts.data.data.getDataAll;

      setPost(payloadData)
    } catch (err) {
      console.log(err);
    }
  }

  const onDelete = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const createRequest = await axios.delete(
        `http://localhost:8087/posts/${postToDelete.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPostToDelete(null);
      setShowModal(false);

      setIsRefresh(true);
    } catch (err) {
      console.log(err);
    }
  }





  return isLoggedIn ? (
    <div className="p-3 bg-all">
      <Navbar>
        <Container>
          <p className="bg-nav fw-bold">Welcome  {user.name}!</p>
          {/* <Navbar.Brand href="#home" className="fw-bold">Welcome {user.name}!</Navbar.Brand> */}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button className="my-3" variant="danger" onClick={(e) => logout(e)}>
              Logout
            </Button>
            <Button className="ms-3" variant="primary" onClick={handleShow}>
              other
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* sidebar */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className="bg-all" closeButton>
          <Offcanvas.Title className="bg-nav fw-bold">Instagram-clone</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-all">
          <div className="row">
            <Link to="/about">
              <Button variant="success">Go to about page</Button>
            </Link>
            <Link className="mt-3" to="/create">
              <Button variant="primary">Go to create postingan</Button>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Container className="mt-5">
        <Row>
          {post.map((post) => (
            <Col md={4} key={post.id}>
              <Card className="shadow" style={{ marginTop: "2rem" }} border="secondary">
                <img src={`http://localhost:8087/public/files/${post.picture}`} alt="" style={{ height: "300px" }} />
                <div className="card-body">
                  <p className="card-text fw-bold">{post.title}</p>
                  <p className="card-text">{post.description}</p>
                  <Link className="" to={`/update/${post.id}`}>
                    <Button variant="warning">Edit</Button>
                  </Link>
                  {/* <Link className="ms-3" to={`/delete/${post.id}`} onClick={(e) => onDelete(e, post)}>
                    <Button variant="danger">Delete</Button>
                  </Link> */}
                  <Button variant="danger" className="ms-3" onClick={(e) => handleShowModal(e, post)}>
                    Delete
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>apakah ingin menghapus?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Postingan tidak bisa kembali ketika di delete</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={(e) => onDelete(e)}>
            Delete
          </Button>

        </Modal.Footer>
      </Modal>

      <Container className="mt-5">
        <Row className="text-center">
          <p className="bg-nav fw-bold">Alamat: Jalan menuju hati mu, aishh</p>
          <p className="bg-nav fw-bold">Pradityaluthfi54@gmail.com</p>
          <p className="bg-nav fw-bold">0812-5952-6461</p>
        </Row>
      </Container>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default Home;