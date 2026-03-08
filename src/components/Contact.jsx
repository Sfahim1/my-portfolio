import { motion } from "framer-motion";
import { Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <section id="contact" className="py-5 container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center fw-bold mb-4"
      >
        Contact Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Your Email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={4} placeholder="Your Message" />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Send Message
          </Button>
        </Form>
      </motion.div>
    </section>
  );
}