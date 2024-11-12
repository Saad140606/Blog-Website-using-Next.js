// import HeroSection from "../../components/Banner";

import Link from "next/link";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsLetter from "../../components/NewsLetter";


// import HeroSection from '../../components/HeroSection';
// import Card from '../../components/Card';

export default function Home() {
  const Bats = [
    
    {
      category: "Blog1",
      title: "The Importance of Clean Code in Modern Development",
      image: "/images/blogs/blog1.jpg",
      price: "Ali Haider",
      link: "/blog1/page"
    },
   
    {
      category: "Blog2",
      title: "Understanding Asynchronous JavaScript: Promises, Async/Await, and Callbacks",
      image: "/images/blogs/blog2.jpg",
      price: "Nahyan Khan",
      link: "/blog2/page"
    },
    {
      category: "Blog3",
      title: "An Introduction to REST APIs and How to Use Them in Web Development",
      image: "/images/blogs/blog3.jpg",
      price: "Izhan",
      link: "/blog3/page"
    },
    {
      category: "Blog4",
      title: "Exploring Next.js 15: New Features and Enhancements",
      image: "/images/blogs/blog4.png",
      price: "Safwan Ata",
      link: "/blog4/page"

    },
    {
      category: "Blog5",
      title: "The Rise of Serverless Architecture in Modern Web Development",
      image: "/images/blogs/blog5.jpg",
      price: "Sami",
      link: "/blog5/page"
    },
    {
      category: "Blog6",
      title: "How AI is Transforming Healthcare: The Future of Medical Technology",
      image: "/images/blogs/blog6.jpg",
      price: "Shaheer",
      link: "/blog6/page"

    },
    {
      category: "Blog7",
      title: "Digital Minimalism: How to Improve Your Focus and Mental Clarity in the Age of Technology",
      image: "/images/blogs/blog7.jpg",
      price: "John Doe",
      link: "/blog7/page"

    },
    {
      category: "Blog8",
      title: "Building Resilience in the Tech Industry: Tips for Managing Stress and Staying Motivated",
      image: "/images/blogs/blog8.jpg",
      price: "David",
      link: "/blog8/page"

    },
    {
        category: "Blog9",
        title: "How to Build Your First Mobile App: A Beginner’s Guide to App Development ",
        image: "/images/blogs/blog9.jpg",
        price: "Sunny",
      link: "/blog9/page"
      },
  ];

  return (
    <>
<Header />
<br /><br /><br /><br /><br /><br />
       <h1 className="font-bold text-white text-4xl text-center pb-05">TRENDING BLOGS</h1>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {Bats.map((item, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Card
                  category={item.category}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  link={item.link}
                ></Card>
                
              </div>
            ))}
          </div>
        </div>
        
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
}
