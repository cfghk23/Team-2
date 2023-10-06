import React, { useState } from "react";
// import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import PageTemplate from "@components/reusable/template/PageTemplate.tsx";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Courses() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    "Introduction to Finance",
    "Introduction to Financial Concepts",
    "Interest Rates",
    "Saving and expenditure",
    "Risk and Return",
    "Risk diversification",
    "Stock",
    "Bond",
    "Mutual Funds",
    "Real Estate",
  ];

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      // Option is already selected, do nothing
      return;
    }

    const clickedIndex = options.indexOf(option);
    const lastSelectedIndex = options.indexOf(
      selectedOptions[selectedOptions.length - 1]
    );

    if (clickedIndex === lastSelectedIndex + 1) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  let content;
  //   before any selection
  if (selectedOptions.length === 0) {
    content = <div></div>;
  } else {
    const selectedOption = selectedOptions[selectedOptions.length - 1];

    switch (selectedOption) {
      case "Introduction to Financial Concepts":
        content = (
          <div>
            <iframe
              className="custom-iframe"
              width="700"
              height="415"
              src="https://www.youtube.com/embed/4j2emMn7UaI?si=ODR72EYRVBeIJnEf"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <Container className="my-5">
              <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <Col lg={7} className="p-3 p-lg-5 pt-lg-3">
                  <h3 className="display-4 fw-bold lh-1">Dive Into:</h3>
                  <p className="lead">
                    This component provides a comprehensive foundation in
                    fundamental financial principles, empowering learners to
                    develop a solid understanding of key concepts and practices
                    in the world of finance. Throughout the course, you will
                    explore essential financial concepts and their applications
                    in real-world scenarios. From the basics of budgeting and
                    saving to the complexities of investment analysis and risk
                    management, you will gain the necessary tools and insights
                    to make informed financial decisions.
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <Button
                      variant="primary"
                      size="lg"
                      className="px-4 me-md-2 fw-bold"
                    >
                      Take Quiz!
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="lg"
                      className="px-4"
                    >
                      Check LeaderBoard
                    </Button>
                  </div>
                </Col>
                <Col
                  lg={4}
                  offset-lg={1}
                  className="p-0 overflow-hidden shadow-lg"
                >
                  <img
                    className="rounded-lg-3"
                    src="https://www.topuniversities.com/sites/default/files/styles/articles_inline/public/articles/lead-images/finance_2.jpg.webp"
                    alt=""
                    width="720"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        );
        break;
      case "Introduction to Finance":
        content = (
          // <div>
          //   <MDBCarousel showIndicators showControls fade>
          //     <MDBCarouselItem
          //       className="w-100 d-block"
          //       itemId={1}
          //       src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
          //       alt="..."
          //     >
          //       <h5>Course Highlights</h5>
          //       <p>A preview into your Course !.</p>
          //     </MDBCarouselItem>

          //     <MDBCarouselItem
          //       className="w-100 d-block"
          //       itemId={2}
          //       src="https://plus.unsplash.com/premium_photo-1681469490209-c2f9f8f5c0a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3500&q=80"
          //       alt="..."
          //     >
          //       <h5>Introduction To Financial Concepts</h5>
          //       <p>
          //         Unlock the fundamentals of financial concepts and gain the
          //         knowledge to make informed decisions in personal and
          //         professional financial matters
          //       </p>
          //     </MDBCarouselItem>

          //     <MDBCarouselItem
          //       className="w-100 d-block"
          //       itemId={3}
          //       src="https://plus.unsplash.com/premium_photo-1670213989452-100c125a6180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3774&q=80"
          //       alt="..."
          //     >
          //       <h5>Interest rates</h5>
          //       <p>
          //         Explore the dynamics of borrowing and lending, and delve into
          //         the impact of interest rates on economies, investments, and
          //         personal finance decisions
          //       </p>
          //     </MDBCarouselItem>

          //     <MDBCarouselItem
          //       className="w-100 d-block"
          //       itemId={4}
          //       src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80"
          //       alt="..."
          //     >
          //       <h5>Saving and expenditure</h5>
          //       <p>
          //         Master the art of balancing your finances by understanding
          //         effective saving strategies and smart expenditure practices
          //         for a secure financial future
          //       </p>
          //     </MDBCarouselItem>

          //     <MDBCarouselItem
          //       className="w-100 d-block"
          //       itemId={5}
          //       src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
          //       alt="..."
          //     >
          //       <h5>Risk and Return</h5>
          //       <p>
          //         Navigate the intricate relationship between risk and reward,
          //         gaining insights into investment decisions and strategies that
          //         maximize returns while managing potential risks effectively
          //       </p>
          //     </MDBCarouselItem>
          //   </MDBCarousel>
          // </div>
          <div></div>
        );
        break;
      case "Interest Rates":
        content = (
          <PageTemplate>
            <div>
              <iframe
                className="custom-iframe"
                width="700"
                height="415"
                src="https://www.youtube.com/embed/4j2emMn7UaI?si=ODR72EYRVBeIJnEf"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <Container className="my-5">
                <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                  <Col lg={7} className="p-3 p-lg-5 pt-lg-3">
                    <h3 className="display-4 fw-bold lh-1">Dive Into:</h3>
                    <p className="lead">
                      This component provides a comprehensive foundation in
                      fundamental financial principles, empowering learners to
                      develop a solid understanding of key concepts and
                      practices in the world of finance. Throughout the course,
                      you will explore essential financial concepts and their
                      applications in real-world scenarios. From the basics of
                      budgeting and saving to the complexities of investment
                      analysis and risk management, you will gain the necessary
                      tools and insights to make informed financial decisions.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                      <Button
                        variant="primary"
                        size="lg"
                        className="px-4 me-md-2 fw-bold"
                      >
                        Take Quiz!
                      </Button>
                      <Button
                        variant="outline-secondary"
                        size="lg"
                        className="px-4"
                      >
                        Check LeaderBoard
                      </Button>
                    </div>
                  </Col>
                  <Col
                    lg={4}
                    offset-lg={1}
                    className="p-0 overflow-hidden shadow-lg"
                  >
                    <img
                      className="rounded-lg-3"
                      src="https://www.topuniversities.com/sites/default/files/styles/articles_inline/public/articles/lead-images/finance_2.jpg.webp"
                      alt=""
                      width="720"
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </PageTemplate>
        );
        break;
      case "Saving and expenditure":
        content = (
          <div>
            <iframe
              className="custom-iframe"
              width="700"
              height="415"
              src="https://www.youtube.com/embed/4j2emMn7UaI?si=ODR72EYRVBeIJnEf"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <Container className="my-5">
              <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <Col lg={7} className="p-3 p-lg-5 pt-lg-3">
                  <h3 className="display-4 fw-bold lh-1">Dive Into:</h3>
                  <p className="lead">
                    This component provides a comprehensive foundation in
                    fundamental financial principles, empowering learners to
                    develop a solid understanding of key concepts and practices
                    in the world of finance. Throughout the course, you will
                    explore essential financial concepts and their applications
                    in real-world scenarios. From the basics of budgeting and
                    saving to the complexities of investment analysis and risk
                    management, you will gain the necessary tools and insights
                    to make informed financial decisions.
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <Button
                      variant="primary"
                      size="lg"
                      className="px-4 me-md-2 fw-bold"
                    >
                      Take Quiz!
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="lg"
                      className="px-4"
                    >
                      Check LeaderBoard
                    </Button>
                  </div>
                </Col>
                <Col
                  lg={4}
                  offset-lg={1}
                  className="p-0 overflow-hidden shadow-lg"
                >
                  <img
                    className="rounded-lg-3"
                    src="https://www.topuniversities.com/sites/default/files/styles/articles_inline/public/articles/lead-images/finance_2.jpg.webp"
                    alt=""
                    width="720"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        );
        break;
      case "Risk and Return":
        content = (
          <div>
            <iframe
              className="custom-iframe"
              width="700"
              height="415"
              src="https://www.youtube.com/embed/4j2emMn7UaI?si=ODR72EYRVBeIJnEf"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <Container className="my-5">
              <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <Col lg={7} className="p-3 p-lg-5 pt-lg-3">
                  <h3 className="display-4 fw-bold lh-1">Dive Into:</h3>
                  <p className="lead">
                    This component provides a comprehensive foundation in
                    fundamental financial principles, empowering learners to
                    develop a solid understanding of key concepts and practices
                    in the world of finance. Throughout the course, you will
                    explore essential financial concepts and their applications
                    in real-world scenarios. From the basics of budgeting and
                    saving to the complexities of investment analysis and risk
                    management, you will gain the necessary tools and insights
                    to make informed financial decisions.
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <Button
                      variant="primary"
                      size="lg"
                      className="px-4 me-md-2 fw-bold"
                    >
                      Take Quiz!
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="lg"
                      className="px-4"
                    >
                      Check LeaderBoard
                    </Button>
                  </div>
                </Col>
                <Col
                  lg={4}
                  offset-lg={1}
                  className="p-0 overflow-hidden shadow-lg"
                >
                  <img
                    className="rounded-lg-3"
                    src="https://www.topuniversities.com/sites/default/files/styles/articles_inline/public/articles/lead-images/finance_2.jpg.webp"
                    alt=""
                    width="720"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        );
        break;
      case "Risk diversification":
        content = (
          <div>
            <iframe
              className="custom-iframe"
              width="700"
              height="415"
              src="https://www.youtube.com/embed/4j2emMn7UaI?si=ODR72EYRVBeIJnEf"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <Container className="my-5">
              <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <Col lg={7} className="p-3 p-lg-5 pt-lg-3">
                  <h3 className="display-4 fw-bold lh-1">Dive Into:</h3>
                  <p className="lead">
                    This component provides a comprehensive foundation in
                    fundamental financial principles, empowering learners to
                    develop a solid understanding of key concepts and practices
                    in the world of finance. Throughout the course, you will
                    explore essential financial concepts and their applications
                    in real-world scenarios. From the basics of budgeting and
                    saving to the complexities of investment analysis and risk
                    management, you will gain the necessary tools and insights
                    to make informed financial decisions.
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <Button
                      variant="primary"
                      size="lg"
                      className="px-4 me-md-2 fw-bold"
                    >
                      Take Quiz!
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="lg"
                      className="px-4"
                    >
                      Check LeaderBoard
                    </Button>
                  </div>
                </Col>
                <Col
                  lg={4}
                  offset-lg={1}
                  className="p-0 overflow-hidden shadow-lg"
                >
                  <img
                    className="rounded-lg-3"
                    src="https://www.topuniversities.com/sites/default/files/styles/articles_inline/public/articles/lead-images/finance_2.jpg.webp"
                    alt=""
                    width="720"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        );
        break;
      case "Stock":
        content = (
          <div>
            <iframe
              className="custom-iframe"
              width="700"
              height="415"
              src="https://www.youtube.com/embed/4j2emMn7UaI?si=ODR72EYRVBeIJnEf"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <Container className="my-5">
              <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <Col lg={7} className="p-3 p-lg-5 pt-lg-3">
                  <h3 className="display-4 fw-bold lh-1">Dive Into:</h3>
                  <p className="lead">
                    This component provides a comprehensive foundation in
                    fundamental financial principles, empowering learners to
                    develop a solid understanding of key concepts and practices
                    in the world of finance. Throughout the course, you will
                    explore essential financial concepts and their applications
                    in real-world scenarios. From the basics of budgeting and
                    saving to the complexities of investment analysis and risk
                    management, you will gain the necessary tools and insights
                    to make informed financial decisions.
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <Button
                      variant="primary"
                      size="lg"
                      className="px-4 me-md-2 fw-bold"
                    >
                      Take Quiz!
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="lg"
                      className="px-4"
                    >
                      Check LeaderBoard
                    </Button>
                  </div>
                </Col>
                <Col
                  lg={4}
                  offset-lg={1}
                  className="p-0 overflow-hidden shadow-lg"
                >
                  <img
                    className="rounded-lg-3"
                    src="https://www.topuniversities.com/sites/default/files/styles/articles_inline/public/articles/lead-images/finance_2.jpg.webp"
                    alt=""
                    width="720"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        );
        break;
      case "Bond":
        content = (
          <div>
            <iframe
              className="custom-iframe"
              width="700"
              height="415"
              src="https://www.youtube.com/embed/4j2emMn7UaI?si=ODR72EYRVBeIJnEf"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <Container className="my-5">
              <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <Col lg={7} className="p-3 p-lg-5 pt-lg-3">
                  <h3 className="display-4 fw-bold lh-1">Dive Into:</h3>
                  <p className="lead">
                    This component provides a comprehensive foundation in
                    fundamental financial principles, empowering learners to
                    develop a solid understanding of key concepts and practices
                    in the world of finance. Throughout the course, you will
                    explore essential financial concepts and their applications
                    in real-world scenarios. From the basics of budgeting and
                    saving to the complexities of investment analysis and risk
                    management, you will gain the necessary tools and insights
                    to make informed financial decisions.
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <Button
                      variant="primary"
                      size="lg"
                      className="px-4 me-md-2 fw-bold"
                    >
                      Take Quiz!
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="lg"
                      className="px-4"
                    >
                      Check LeaderBoard
                    </Button>
                  </div>
                </Col>
                <Col
                  lg={4}
                  offset-lg={1}
                  className="p-0 overflow-hidden shadow-lg"
                >
                  <img
                    className="rounded-lg-3"
                    src="https://www.topuniversities.com/sites/default/files/styles/articles_inline/public/articles/lead-images/finance_2.jpg.webp"
                    alt=""
                    width="720"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        );
        break;
      case "Mutual Funds":
        content = (
          <div>
            <iframe
              className="custom-iframe"
              width="700"
              height="415"
              src="https://www.youtube.com/embed/4j2emMn7UaI?si=ODR72EYRVBeIJnEf"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <Container className="my-5">
              <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <Col lg={7} className="p-3 p-lg-5 pt-lg-3">
                  <h3 className="display-4 fw-bold lh-1">Dive Into:</h3>
                  <p className="lead">
                    This component provides a comprehensive foundation in
                    fundamental financial principles, empowering learners to
                    develop a solid understanding of key concepts and practices
                    in the world of finance. Throughout the course, you will
                    explore essential financial concepts and their applications
                    in real-world scenarios. From the basics of budgeting and
                    saving to the complexities of investment analysis and risk
                    management, you will gain the necessary tools and insights
                    to make informed financial decisions.
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <Button
                      variant="primary"
                      size="lg"
                      className="px-4 me-md-2 fw-bold"
                    >
                      Take Quiz!
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="lg"
                      className="px-4"
                    >
                      Check LeaderBoard
                    </Button>
                  </div>
                </Col>
                <Col
                  lg={4}
                  offset-lg={1}
                  className="p-0 overflow-hidden shadow-lg"
                >
                  <img
                    className="rounded-lg-3"
                    src="https://www.topuniversities.com/sites/default/files/styles/articles_inline/public/articles/lead-images/finance_2.jpg.webp"
                    alt=""
                    width="720"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        );
        break;
      case "Real Estate":
        content = (
          <div>
            <iframe
              className="custom-iframe"
              width="700"
              height="415"
              src="https://www.youtube.com/embed/4j2emMn7UaI?si=ODR72EYRVBeIJnEf"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <Container className="my-5">
              <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <Col lg={7} className="p-3 p-lg-5 pt-lg-3">
                  <h3 className="display-4 fw-bold lh-1">Dive Into:</h3>
                  <p className="lead">
                    This component provides a comprehensive foundation in
                    fundamental financial principles, empowering learners to
                    develop a solid understanding of key concepts and practices
                    in the world of finance. Throughout the course, you will
                    explore essential financial concepts and their applications
                    in real-world scenarios. From the basics of budgeting and
                    saving to the complexities of investment analysis and risk
                    management, you will gain the necessary tools and insights
                    to make informed financial decisions.
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <Button
                      variant="primary"
                      size="lg"
                      className="px-4 me-md-2 fw-bold"
                    >
                      Take Quiz!
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="lg"
                      className="px-4"
                    >
                      Check LeaderBoard
                    </Button>
                  </div>
                </Col>
                <Col
                  lg={4}
                  offset-lg={1}
                  className="p-0 overflow-hidden shadow-lg"
                >
                  <img
                    className="rounded-lg-3"
                    src="https://www.topuniversities.com/sites/default/files/styles/articles_inline/public/articles/lead-images/finance_2.jpg.webp"
                    alt=""
                    width="720"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        );
        break;
      // Add cases for other options here
      default:
        content = <div>No content available for the selected option.</div>;
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="content">{content}</div>
        </div>
        <div className="col-md-3">
          <div className="navbar">
            <ul className="nav flex-column">
              {options.map((option) => (
                <li key={option} className="nav-item">
                  <button
                    className={`nav-link ${
                      selectedOptions.includes(option) ? "active" : ""
                    }`}
                    onClick={() => handleOptionClick(option)}
                    disabled={
                      !selectedOptions.includes(option) &&
                      selectedOptions.length !== options.indexOf(option)
                    }
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
