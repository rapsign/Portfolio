import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import {
  Card,
  CardBody,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";
import emailjs from "emailjs-com";

const Contact = ({ isDarkMode }) => {
  const borderColor = isDarkMode ? "border-gray-300" : "border-[#3a3a3c]";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardBgColor = isDarkMode ? "bg-[#081c3d]" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-[#3a3a3c]";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Destructure data from formData
    const { firstName, lastName, email, subject, message } = formData;
    // Prepare email template parameters
    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      subject: subject,
      message: message,
    };
    emailjs
      .send(
        "service_kwfmywq",
        "template_npmngq3",
        templateParams,
        "JEpzkXhbxoP-57CAT"
      )
      .then((response) => {
        console.log("Email successfully sent!", response.status, response.text);
        // Optionally clear the form here
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email send failed:", error);
      });
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center mb-10"
    >
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-5xl mt-20 font-bold my-5">Contact</h1>
        <hr className={`border-t-8 ${borderColor} w-24 mb-5`} />
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 200 }} // Start with opacity 0 and move up from y = 50
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }} // Animate opacity and move up when in view
        transition={{ duration: 0.5 }} // Animation duration
        className="w-full p-6 px-12 text-center lg:text-left sm:text-center"
      >
        <h1 className="text-4xl font-bold mb-3 text-cyan-400">
          Feel Free To Contact Me
        </h1>
        <p className="text-lg">
          I'am always open to discussing product design, collaborating work or
          partnerships. Just contact me with this media below
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 w-full pb-4 px-6">
        <motion.a
          ref={ref}
          initial={{ opacity: 0, y: 200 }} // Start with opacity 0 and move up from y = 50
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }} // Animate opacity and move up when in view
          transition={{ duration: 0.5, delay: 0.3 }}
          href="https://wa.me/6289632931696"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            className={`mt-6 group w-full  border-b-4 border-cyan-400 hover:shadow-xl ${cardBgColor}`}
          >
            <CardBody>
              <div className="grid grid-cols-3">
                <motion.div
                  className="col-span-1 flex flex-col items-center justify-center mr-5"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="80"
                    height="80"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fff"
                      d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"
                    ></path>
                    <path
                      fill="#cfd8dc"
                      d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"
                    ></path>
                    <path
                      fill="#40c351"
                      d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"
                    ></path>
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </motion.div>
                <div className="col-span-2 flex flex-col items-start justify-start">
                  <Typography className={`font-bold text-xl ${textColor}`}>
                    WhatsApp
                  </Typography>
                  <Typography className={`mb-2 ${textColor}`}>
                    +62 89632931696
                  </Typography>
                  <Typography className="flex items-start gap-2 font-bold text-cyan-400">
                    Send Me A Message
                  </Typography>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.a>
        <motion.a
          ref={ref}
          initial={{ opacity: 0, y: 200 }} // Start with opacity 0 and move up from y = 50
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }} // Animate opacity and move up when in view
          transition={{ duration: 0.5, delay: 0.5 }}
          href="https://mail.google.com/mail/u/0/?fs=1&to=renaldiprayuda11@gmail.com&su=SUBJECT&body=Your+Messages&tf=cm"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Card
            className={`mt-6 group w-full border-b-4 border-cyan-400 hover:shadow-xl ${cardBgColor}`}
          >
            <CardBody>
              <div className="grid grid-cols-3">
                <motion.div
                  className="col-span-1 flex flex-col items-center justify-center mr-5"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="80"
                    height="80"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#4caf50"
                      d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                    ></path>
                    <path
                      fill="#1e88e5"
                      d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                    ></path>
                    <polygon
                      fill="#e53935"
                      points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                    ></polygon>
                    <path
                      fill="#c62828"
                      d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                    ></path>
                    <path
                      fill="#fbc02d"
                      d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                    ></path>
                  </svg>
                </motion.div>
                <div className="col-span-2 flex flex-col items-start justify-start">
                  <Typography className={`font-bold text-xl ${textColor}`}>
                    Gmail
                  </Typography>
                  <Typography className={`mb-2 ${textColor}`}>
                    renaldiprayuda11@gmail.com
                  </Typography>
                  <Typography className="flex items-start gap-2 font-bold text-cyan-400">
                    Send Me A Message
                  </Typography>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.a>
        <motion.a
          ref={ref}
          initial={{ opacity: 0, y: 200 }} // Start with opacity 0 and move up from y = 50
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }} // Animate opacity and move up when in view
          transition={{ duration: 0.5, delay: 0.7 }}
          href="https://t.me/+6289632931696"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Card
            className={`mt-6 group w-full border-b-4 border-cyan-400 hover:shadow-xl ${cardBgColor}`}
          >
            <CardBody>
              <div className="grid grid-cols-3">
                <motion.div
                  className="col-span-1 flex flex-col items-center justify-center mr-5"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="80"
                    height="80"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#29b6f6"
                      d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M34,15l-3.7,19.1c0,0-0.2,0.9-1.2,0.9c-0.6,0-0.9-0.3-0.9-0.3L20,28l-4-2l-5.1-1.4c0,0-0.9-0.3-0.9-1	c0-0.6,0.9-0.9,0.9-0.9l21.3-8.5c0,0,0.7-0.2,1.1-0.2c0.3,0,0.6,0.1,0.6,0.5C34,14.8,34,15,34,15z"
                    ></path>
                    <path
                      fill="#b0bec5"
                      d="M23,30.5l-3.4,3.4c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0l1-6L23,30.5z"
                    ></path>
                    <path
                      fill="#cfd8dc"
                      d="M29.9,18.2c-0.2-0.2-0.5-0.3-0.7-0.1L16,26c0,0,2.1,5.9,2.4,6.9c0.3,1,0.6,1,0.6,1l1-6l9.8-9.1	C30,18.7,30.1,18.4,29.9,18.2z"
                    ></path>
                  </svg>
                </motion.div>
                <div className="col-span-2 flex flex-col items-start justify-start">
                  <Typography className={`font-bold text-xl ${textColor}`}>
                    Telegram
                  </Typography>
                  <Typography className={`mb-2 ${textColor}`}>
                    +62 89632931696
                  </Typography>
                  <Typography className="flex items-start gap-2 font-bold text-cyan-400">
                    Send Me A Message
                  </Typography>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.a>
      </div>
      <div className="col-span-1 flex items-center justify-center pb-4 px-6 w-full">
        <hr className={`border-t-1 ${borderColor} w-full`} />
        <span className={`mx-4 font-bold ${textColor}`}>Or</span>
        <hr className={`border-t-1 ${borderColor} w-full`} />
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 200 }} // Start with opacity 0 and move up from y = 50
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }} // Animate opacity and move up when in view
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full px-6 pb-4"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <Typography
                tag="label"
                className="block text-sm font-medium mb-2"
              >
                First Name
              </Typography>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Enter your First Name"
                className="w-full border-cyan-400"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Typography
                tag="label"
                className="block text-sm font-medium mb-2"
              >
                Last Name
              </Typography>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Enter your last name"
                className="w-full border-cyan-400"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Typography
                tag="label"
                className="block text-sm font-medium mb-2"
              >
                Your Email
              </Typography>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full border-cyan-400"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Typography
                tag="label"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </Typography>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Enter your subject"
                className="w-full border-cyan-400"
              />
            </div>
          </div>
          <div className="col-span-2">
            <Typography tag="label" className="block text-sm font-medium mb-2">
              Message
            </Typography>
            <Textarea
              rows="4"
              required
              className="w-full border-cyan-400"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <button
              className="flex items-center justify-center w-64 py-2 text-sm font-medium leading-7 text-white uppercase transition bg-cyan-400 rounded shadow ripple hover:shadow-lg hover:bg-cyan-500 focus:outline-none"
              type="submit"
            >
              <span className="mr-4">Submit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                className="w-6 h-6"
                viewBox="0 0 50 50"
              >
                <path d="M44.376953 5.9863281C43.889905 6.0076957 43.415817 6.1432497 42.988281 6.3144531C42.565113 6.4845113 40.128883 7.5243408 36.53125 9.0625C32.933617 10.600659 28.256963 12.603668 23.621094 14.589844C14.349356 18.562196 5.2382813 22.470703 5.2382812 22.470703L5.3046875 22.445312C5.3046875 22.445312 4.7547875 22.629122 4.1972656 23.017578C3.9185047 23.211806 3.6186028 23.462555 3.3730469 23.828125C3.127491 24.193695 2.9479735 24.711788 3.015625 25.259766C3.2532479 27.184511 5.2480469 27.730469 5.2480469 27.730469L5.2558594 27.734375L14.158203 30.78125C14.385177 31.538434 16.858319 39.792923 17.402344 41.541016C17.702797 42.507484 17.984013 43.064995 18.277344 43.445312C18.424133 43.635633 18.577962 43.782915 18.748047 43.890625C18.815627 43.933415 18.8867 43.965525 18.957031 43.994141C18.958531 43.994806 18.959437 43.99348 18.960938 43.994141C18.969579 43.997952 18.977708 43.998295 18.986328 44.001953L18.962891 43.996094C18.979231 44.002694 18.995359 44.013801 19.011719 44.019531C19.043456 44.030655 19.062905 44.030268 19.103516 44.039062C20.123059 44.395042 20.966797 43.734375 20.966797 43.734375L21.001953 43.707031L26.470703 38.634766L35.345703 45.554688L35.457031 45.605469C37.010484 46.295216 38.415349 45.910403 39.193359 45.277344C39.97137 44.644284 40.277344 43.828125 40.277344 43.828125L40.310547 43.742188L46.832031 9.7519531C46.998903 8.9915162 47.022612 8.334202 46.865234 7.7402344C46.707857 7.1462668 46.325492 6.6299361 45.845703 6.34375C45.365914 6.0575639 44.864001 5.9649605 44.376953 5.9863281zM44.429688 8.0195312C44.627491 8.0103707 44.774102 8.032983 44.820312 8.0605469C44.866523 8.0881109 44.887272 8.0844829 44.931641 8.2519531C44.976011 8.419423 45.000036 8.7721605 44.878906 9.3242188L44.875 9.3359375L38.390625 43.128906C38.375275 43.162926 38.240151 43.475531 37.931641 43.726562C37.616914 43.982653 37.266874 44.182554 36.337891 43.792969L26.632812 36.224609L26.359375 36.009766L26.353516 36.015625L23.451172 33.837891L39.761719 14.648438A1.0001 1.0001 0 0 0 38.974609 13A1.0001 1.0001 0 0 0 38.445312 13.167969L14.84375 28.902344L5.9277344 25.849609C5.9277344 25.849609 5.0423771 25.356927 5 25.013672C4.99765 24.994652 4.9871961 25.011869 5.0332031 24.943359C5.0792101 24.874869 5.1948546 24.759225 5.3398438 24.658203C5.6298218 24.456159 5.9609375 24.333984 5.9609375 24.333984L5.9941406 24.322266L6.0273438 24.308594C6.0273438 24.308594 15.138894 20.399882 24.410156 16.427734C29.045787 14.44166 33.721617 12.440122 37.318359 10.902344C40.914175 9.3649615 43.512419 8.2583658 43.732422 8.1699219C43.982886 8.0696253 44.231884 8.0286918 44.429688 8.0195312zM33.613281 18.792969L21.244141 33.345703L21.238281 33.351562A1.0001 1.0001 0 0 0 21.183594 33.423828A1.0001 1.0001 0 0 0 21.128906 33.507812A1.0001 1.0001 0 0 0 20.998047 33.892578A1.0001 1.0001 0 0 0 20.998047 33.900391L19.386719 41.146484C19.35993 41.068197 19.341173 41.039555 19.3125 40.947266L19.3125 40.945312C18.800713 39.30085 16.467362 31.5161 16.144531 30.439453L33.613281 18.792969zM22.640625 35.730469L24.863281 37.398438L21.597656 40.425781L22.640625 35.730469z"></path>
              </svg>
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
