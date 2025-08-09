function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="\src\assets\img4.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            About me
                        </h2>
                        <p className="mt-6 text-gray-600">
                            I am Payal, pre-final year student persuing BTech in CSE with a strong interest in new technologies. I am passionate about learning, improving my skills and applying them to real-world projects. I am hardworking, a quick learner and enjoy working in collaborative environments.  
                        </p>
                        <p className="mt-4 text-gray-600">
                            My goal is to grow my skills, communicate effectively and build a successful career in the tech industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;