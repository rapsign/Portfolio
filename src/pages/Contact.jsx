import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useForm } from "../hooks/useForm";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { getThemeStyles } from "../utils/themeStyles";

const Contact = ({ isDarkMode }) => {
  const themeStyles = getThemeStyles(isDarkMode);
  const { ref, isInView } = useInViewAnimation({ once: true });
  const { formData, handleChange, handleSubmit, loading, error, success } =
    useForm(
      {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      },
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      import.meta.env.VITE_EMAILJS_USER_ID
    );

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center mb-10"
    >
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-3xl mt-20 font-bold my-5">Contact</h1>
        <hr className={`border-t-4 ${themeStyles.borderColor} w-24 mb-5`} />
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className="w-full p-6 px-12 text-center lg:text-left sm:text-center"
      >
        <h1 className="text-2xl font-bold mb-3 text-cyan-400">
          Feel Free To Contact Me
        </h1>
        <p className="text-md">
          I'm always open to discussing product design, collaborating work or
          partnerships. Just contact me with the media below.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 w-full pb-4 px-6">
        <ContactCard
          link="https://wa.me/6285121101696"
          platform="WhatsApp"
          contactInfo="+62 85121101696"
          iconPath="img/svg/whatsapp.svg"
          isDarkMode={isDarkMode}
        />
        <ContactCard
          link="https://mail.google.com/mail/u/0/?fs=1&to=renaldiprayuda11@gmail.com&su=SUBJECT&body=Your+Messages&tf=cm"
          platform="Gmail"
          contactInfo="renaldiprayuda11@gmail.com"
          iconPath="img/svg/gmail.svg"
          isDarkMode={isDarkMode}
        />
        <ContactCard
          link="https://t.me/+6289632931696"
          platform="Telegram"
          contactInfo="+62 89632931696"
          iconPath="img/svg/telegram.svg"
          isDarkMode={isDarkMode}
        />
      </div>
      <div className="col-span-1 flex items-center justify-center pb-4 px-6 w-full">
        <hr className={`border-t ${themeStyles.borderColor} w-full`} />
        <span className={`mx-4 font-bold ${themeStyles.textColor}`}>Or</span>
        <hr className={`border-t ${themeStyles.borderColor} w-full`} />
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full px-6 pb-4"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <Input
                type="text"
                label="First Name"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                color={themeStyles.outlineColor}
                className="w-full"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Input
                label="Last Name"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                color={themeStyles.outlineColor}
                className="w-full"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Input
                label="Your Email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                color={themeStyles.outlineColor}
                className="w-full"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Input
                label="Subject"
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                color={themeStyles.outlineColor}
                className="w-full"
              />
            </div>
          </div>
          <div className="col-span-2">
            <Textarea
              label=" Message"
              rows="4"
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              color={themeStyles.outlineColor}
              className="w-full"
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

const ContactCard = ({ link, platform, contactInfo, iconPath, isDarkMode }) => {
  const { ref, isInView } = useInViewAnimation({ once: true });
  const themeStyles = getThemeStyles(isDarkMode);

  return (
    <motion.a
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card
        className={`mt-6 group w-full border-b-4 ${themeStyles.cardBgColor}  border-cyan-400 hover:shadow-xl`}
      >
        <CardBody className="flex flex-row items-center">
          <motion.div
            className="flex flex-col items-center justify-center mr-5"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <img src={iconPath} alt={platform} width="80" height="80" />
          </motion.div>
          <div className="flex flex-col items-start justify-start">
            <Typography
              className={`font-bold ${themeStyles.cardTextColor} text-xl`}
            >
              {platform}
            </Typography>
            <Typography className={`mb-2 ${themeStyles.cardTextColor}`}>
              {contactInfo}
            </Typography>
            <Typography className="font-bold text-cyan-400">
              Send Me A Message
            </Typography>
          </div>
        </CardBody>
      </Card>
    </motion.a>
  );
};

export default Contact;
