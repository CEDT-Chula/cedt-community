import { Thought, CourseThought } from "@/components/life@cedt/types/type";

export const pageWording = {
    home: {
        heroTitle1: "CEDT",
        heroTitle2: "Community",
        subTitles: [
            "a Computer Engineer and Digital Technology Student Community That thrives toward future. 🚀",
            "a place where we learn and grow together. 🌱",
            "a place where we build something amazing. 🌈",
            "we hope you enjoy your stay. 🎉",
            "we look forward to the day we would met 🌟",
        ],
        // Explore CEDT Section
        explore: {
            title: "What do we have",
            // -- Cards
            heroCard: {
                title: {
                    imagePath: "/social/discord.png",
                    text: "Discord Community",
                },
                description: "Aspiring chat server blending growth in tech and joy",
                image: "/home/exploreHeroCardImage.png",
            },
            secondaryCard1: {
                title: {
                    imagePath: null,
                    text: "Events and Activities",
                },
                description: "a fun and energetic event.",
                image: "/home/exploreSecondaryCard1Image.png",
            },
            secondaryCard2: {
                title: {
                    imagePath: "/social/instagram.png",
                    text: "Instagram",
                },
                description: "life and story sharing",
                image: "/home/exploreSecondaryCard2Image.png",
            },
        }


    },
    lifeAtCedt: {
        hero: {
            title1: "Life@",
            title2: "CEDT",
        },
        whatWeHaveLearned: {
            title: "What we have learned so far",
            courseThoughts: [
                {
                    title: "Intensive Courses",
                    description: "We offer intensive courses that help students learn and understand the basics of computer science.",
                    image: "/life@cedt/intensivecourse.jpeg",
                    alignment: "left"
                },
                {
                    title: "Friday Activities",
                    description: "We participate in activities that help us get to know the company better and offer workshops on topics of interest.",
                    image: "/life@cedt/fridayact.jpeg",
                    alignment: "right"
                },
                {
                    title: "Internship",
                    description: "We offer internships that help students gain practical experience in the field of computer science.",
                    image: "/life@cedt/intern.jpeg",
                    alignment: "left"
                }
            ] as CourseThought[],
        },
        thought: {
            title: "Thoughts from us",
            studentThoughts: [
                {
                    name: "Prame",
                    thought: "การเรียน CEDT เป็นเวลา 1 ปี สามารถเปลี่ยนแปลงความรู้และ ความเข้าใจเกี่ยวกับคอมพิวเตอร์ จากคนที่เริ่มจากไม่มีพื้นฐานเลย ให้กลายเป็นผู้ที่มีความรู้และ ความเชี่ยวชาญในหลายๆ ด้าน ได้อย่างน่าทึ่ง",
                    position: "CEDT student",
                    image: "/life@cedt/prame.png"
                },
                {
                    name: "Now",
                    thought: "เป็นหลักสูตรใหม่ที่ให้เราได้ลอง ทำอะไรใหม่ๆ เนื้อหาที่เรียนได้ใช้ ทำงานจริง ไม่ต้องเรียนเนื้อหา ฟิสิกส์เคมี ที่ไม่เกี่ยวข้องกับ คอมพิวเตอร์รูปแบบการเรียนเป็น Block โฟกัสไปที่ละวิชาได้ฝึกงาน ทุกปี จบภายใน 3.5 ปี",
                    position: "CEDT student",
                    image: "/life@cedt/now.png"
                },
                {
                    name: "Api",
                    thought: "CEDT เป็นคณะนึงที่ผมรู้สึกว่า เรียนได้อย่างมีความสุขสุดๆ เพราะได้เรียนอย่างที่อยากเรียน และได้ลองแบบที่อย่างลอง ผมคิดว่าเป็น sandbox ที่เหมาะสําหรับการ ลงมือทําอะไรใหม่ ๆ จริง ๆ ครับ",
                    position: "CEDT student",
                    image: "/life@cedt/api.png"
                },
                {
                    name: "Esther",
                    thought: "CEDT สอนเพื่อให้นำไปใช้ได้จริง ตั้งแต่ปี 1 ได้ทำโปรเจคกับเพื่อนๆ ช่วยกันเรียน จากวันแรกที่ไม่รู้ อะไรเลยวันนี้ต้องฝึกงานแล้ว ทำให้เกิดความกระตือรือร้นที่จะเรียนรู้และทำให้เก่งขึ้นจากวัน แรกมาก",
                    position: "CEDT student",
                    image: "/life@cedt/esther.png"
                }
            ] as Thought[],
        },
        footer: {
            credit: "Credit: Video and photos sourced from the Facebook page of Computer Engineering & Digital Technology, Chulalongkorn University."
        }

    },
    login:{
        hero:{
        title1: "Welcome back to",
        title2: "CEDT",
        title3: "Community",
        },
        footer:{
            cantlogin: "was a cedt student but can’t login?",
            contact: "contact",
            here: "here",
            href: "https://www.facebook.com/cedt.chula"
        }

    }
}