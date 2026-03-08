import { motion } from "framer-motion";
import { Card, Row, Col } from "react-bootstrap";

export default function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "Built with React & Bootstrap" },
    { title: "Federated Learning Demo", desc: "Machine learning project" },
    { title: "Circuit Simulator", desc: "Electronics lab project" },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <h2 className="text-center fw-bold mb-5">Projects</h2>
      <Row className="container mx-auto">
        {projects.map((p, i) => (
          <Col md={4} key={i} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
            >
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text>{p.desc}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
