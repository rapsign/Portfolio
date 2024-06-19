import { motion } from "framer-motion";
import { Card, Button } from "@material-tailwind/react";

const Skill = () => {
return (
        <section id="skill" className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold my-5 text-[#3a3a3c]">Skills</h1>
            <hr className="border-t-8 border-[#3a3a3c] w-24 mb-5" />
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                    <motion.div
                    className="col-span-1 flex justify-center items-center p-6 lg:justify-end"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    >
                        <Card className="w-full max-w-2xl p-6 shadow-lg flex flex-col items-center">
                            <div className="grid grid-cols-4 gap-10 justify-center mb-4">
                                <div className="flex flex-col items-center">
                                    <Button className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-22 lg:h-22 rounded-full shadow-md p-0" color="white">
                                        <img src="https://symbols.getvecta.com/stencil_25/37_html5.d4d8050235.svg" alt="HTML5" className="w-3/4 h-3/4" />
                                    </Button>
                                        <span className="mt-3 text-lg font-bold text-[#3a3a3c]">HTML5</span>
                                        <span className="text-sm">Advanced</span>
                                </div>
                            <div className="flex flex-col items-center">
                                    <Button className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-22 lg:h-22 rounded-full shadow-md p-0" color="white">
                                        <img src="https://symbols.getvecta.com/stencil_25/14_css3.d930bfb832.svg" alt="CSS3" className="w-3/4 h-3/4" />
                                    </Button>
                                        <span className="mt-3 text-lg font-bold text-[#3a3a3c]">CSS3</span>
                                        <span className="text-sm">Advanced</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Button className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-22 lg:h-22 rounded-full shadow-md p-0" color="white">
                                    <img src="https://symbols.getvecta.com/stencil_25/41_javascript.0ca26ec4ab.svg" alt="JavaScript" className="w-3/4 h-3/4" />
                                </Button>
                                <span className="mt-3 text-lg font-bold text-[#3a3a3c]">JavaScript</span>
                                <span className="text-sm">Intermediate</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Button className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-22 lg:h-22 rounded-full shadow-md p-0" color="white">
                                    <img src="https://symbols.getvecta.com/stencil_25/5_bootstrap.bbf5d3d59c.svg" alt="Bootstrap" className="w-3/4 h-3/4" />
                                </Button>
                                    <span className="mt-3 text-lg font-bold text-[#3a3a3c]">Bootstrap</span>
                                    <span className="text-sm">Advanced</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Button className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-22 lg:h-22 rounded-full shadow-md p-0" color="white">
                                    <img src="https://symbols.getvecta.com/stencil_261/27_mysql.4e2ff8ff6c.svg" alt="MySQL" className="w-3/4 h-3/4" />
                                </Button>
                                    <span className="mt-3 text-lg font-bold text-[#3a3a3c]">MySQL</span>
                                    <span className="text-sm">Advanced</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Button className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-22 lg:h-22 rounded-full shadow-md p-0" color="white">
                                    <img src="https://www.php.net//images/logos/new-php-logo.svg" alt="PHP" className="w-3/4 h-3/4" />
                                </Button>
                                    <span className="mt-3 text-lg font-bold text-[#3a3a3c]">PHP</span>
                                    <span className="text-sm">Advanced</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Button className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-22 lg:h-22 rounded-full shadow-md p-0" color="white">
                                    <img src="https://symbols.getvecta.com/stencil_25/10_codeigniter.8dcbcc9b8a.svg" alt="Codeigniter4" className="w-3/4 h-3/4" />
                                </Button>
                                    <span className="mt-3 text-lg font-bold text-[#3a3a3c]">Codeigniter4</span>
                                    <span className="text-sm">Advanced</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Button className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-22 lg:h-22 rounded-full shadow-md p-0" color="white">
                                    <img src="https://symbols.getvecta.com/stencil_25/72_react.76a8d36b4b.svg" alt="React" className="w-3/4 h-3/4" />
                                </Button>
                                    <span className="mt-3 text-lg font-bold text-[#3a3a3c]">React</span>
                                    <span className="text-sm">Basic</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Button className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-22 lg:h-22 rounded-full shadow-md p-0" color="white">
                                    <img src="https://cdn.worldvectorlogo.com/logos/laravel-2.svg" alt="Laravel" className="w-3/4 h-3/4" />
                                </Button>
                                    <span className="mt-3 text-lg font-bold text-[#3a3a3c]">Laravel</span>
                                    <span   span className="text-sm">Intermediate</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Button className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-22 lg:h-22 rounded-full shadow-md p-0" color="white">
                                    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS" className="w-3/4 h-3/4" />
                                </Button>
                                    <span className="mt-3 text-lg font-bold text-[#3a3a3c]">Tailwind</span>
                                    <span className="text-sm">Basic</span>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            <div className="col-span-1 flex justify-center items-center"> {/* Tambahkan lg:justify-start untuk menggeser ke kiri pada tampilan desktop */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-6 text-center"
                >
                <h1 className="text-4xl font-bold text-cyan-400 mb-3">Tech Stack</h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg text-gray-600"
            >
              There are some tech stacks that I use in building and running a web application.
            </motion.h2>
          </motion.div>           
            </div>
        </div>
            </section>
);
}
export default Skill;