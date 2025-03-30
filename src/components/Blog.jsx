import React from 'react'
import BlogCard from './BlogCard'
import "../css/Blog.css"

const Blog = () => {
    const srcs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];
    const descs = [
        "HCLTech has partnered with Cricket Australia since 2019 to digitally transform platforms like cricket.com.au and the Cricket Australia Live app, enhancing fan engagement and community cricket experiences. In January 2025, HCLTech and Microsoft collaborated with Cricket Australia to introduce an AI-powered matchday companion feature in the app, providing fans with insightful, real-time updates during live matches.",
        "HCLSoftware entered a multi-year partnership with Scuderia Ferrari in November 2022, becoming a strategic partner focused on providing high-performance, precision technology. In May 2023, Ferrari began implementing HCLSoftware's Volt MX and AppScan solutions to enhance employee experience and security by accelerating their digital transformation.",
        "In September 2022, HCLTech became an Official Cornerstone Partner of MetLife Stadium and the official digital transformation partner for the New York Giants and New York Jets, aiming to enhance fan experiences through advanced technology. This collaboration focuses on making MetLife Stadium the most technologically advanced venue in the U.S., providing immersive, real-time digital engagement for guests.",
        "In March 2025, Western Union partnered with HCLTech to transition to an AI-led platform operating model, utilizing HCLTech's solutions like FENIXAI and AI Force to enhance agility and scalability. As part of this collaboration, they plan to establish an advanced technology center in Hyderabad, India, to bolster innovation and technology capabilities.",
        "In January 2024, HCL Group and Foxconn announced a joint venture to establish a semiconductor outsourced assembly and testing (OSAT) facility in India, with Foxconn holding a 40% stake through a $37.2 million investment. By March 2025, the joint venture began seeking engineering, procurement, and construction partners for the upcoming chip facility, engaging with firms like Larsen & Toubro and Taiwan's CTCI.",
        "HCLTech partnered with Intel to co-develop advanced silicon solutions and enhance semiconductor innovation. They also collaborate on AI-driven workplace solutions using Intel Core Ultra processors.",
        "HCLTech partnered with Manchester United from 2015 to 2022 to drive the club's digital transformation, developing the 'X' platform that enhanced fan engagement across digital channels. This collaboration led to the launch of the Manchester United Official App in 2018, providing real-time, personalized experiences for the club's global fanbase.",
        "HCLTech and AWS have a longstanding partnership focused on accelerating enterprise cloud transformations through services like migration, modernization, and managed operations. In May 2024, they expanded this collaboration to advance generative AI adoption, implementing AWS services such as Amazon Bedrock and Amazon SageMaker to develop AI-driven solutions across industries.",
        "HCLTech and Google Cloud have a strategic partnership focused on accelerating enterprise digital transformations through cloud solutions, AI, and cybersecurity services. In May 2024, they expanded this collaboration by integrating HCLTech's GenAI platform, AI Force™, with Google's Gemini models to enhance AI-driven innovation for global enterprises.",
        "HCLTech, an SAP Global Strategic Services Partner, has collaborated with SAP for over 25 years to lead complex transformation programs. In January 2024, they expanded this partnership to drive innovation and accelerate the adoption of Generative AI technologies, aiming to enhance business transformation outcomes."
    ];

    return (
        <>
            <div className="mainBlog">
                <h2 className='title' >Global partnerships of HCL Group</h2>
                {
                    srcs.map((src, index) => (
                        <BlogCard key={index} src={src} desc={descs[index]} />
                    ))
                }
            </div>

        </>
    )
}

export default Blog