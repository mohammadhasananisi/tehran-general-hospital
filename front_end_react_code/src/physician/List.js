import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const List = props => {
  const [show, setShow] = useState(false);
  const [single_doctor, setSingleDoctor] = useState([]);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [doctor, setdoctor] = useState([]);

  useEffect(() => {
    setdoctor(props.doctor);
  }, [props.doctor]);

  const filterSelection = role_title => {
    // console.log('is prees');
    if (role_title === 'ALL') {
      setdoctor(props.doctor);
    } else {
      setdoctor(props.doctor.filter(doc => doc.role_title === role_title));
    }

  };

const single_doctor_fun = id=>{
  setSingleDoctor(props.doctor.find(doc => doc.id === id));
  // console.log(props.doctor.filter(doc => doc.id === id));
  // console.log(single_doctor);
  setShow(true);
};

  return (
    <>
    <div className="pagebox">
      <div className="container">
        <nav className="primary clearfix">
          <div className="btn-group" role="group" aria-label="" style={{ float: 'right' }}>

            <button
              type="button"
              className="btn btn-default selected"
              onClick={() => filterSelection('ALL')}
            >
              همه
            </button>

            {props.role_doctor.map(role => {
              return (
                <button
                key={role.role_title}
                  type="button"
                  className="btn btn-default"
                  // data-filter="*"
                  // onClick
                  onClick={() => filterSelection(role.role_title)}
                >
                  {role.role_title}
                </button>
              );
            })
            }

          </div>
        </nav>
        <div className="grid row" style={{ position: 'relative', height: 'auto' }}>

          {doctor.map(doc => {
            return (
              <div className="grid-item col-sm-4" onClick={()=> single_doctor_fun(doc.id)} key={doc.id}>
                <div className="thumbnail">
                  <img
                    src={doc.user_image}
                    alt=""
                    className="img-circle"

                  />
                  <div className="caption">
                    {/* <a onClick={()=> single_doctor_fun(doc.id)}> */}
                      <span style={{color:'#4274da'}}>{doc.first_name} {doc.last_name}</span>
                    {/* </a> */}
                    <div className="">{doc.role_title}</div>
                  </div>
                </div>
              </div>
            );
          })}


          <div style={{ marginBottom: 30, width: '100%', height: '100%' }}></div>

        </div>
      </div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

    </div>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-3 col-sm-4 col-xs-6">
                <img src={single_doctor.user_image} class="img-responsive" alt={single_doctor.first_name} />
              </div>
              <div class="col-md-9 col-sm-8 col-xs-6">
        <h2>{single_doctor.first_name} {single_doctor.last_name}</h2>
        <p>{single_doctor.role_title}</p>

              </div>
            </div>
            <div class="row">
        <div class="col-md-12">{single_doctor.bio}</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            بستن
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};
export default List;