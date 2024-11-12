import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsLetter from "../../components/NewsLetter";

export default function Contact() {
  return (
    <>
     <Header />

      <div className="container-xxl py-5">
        <div className="container">
          
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
              
              </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <iframe
                className="position-relative rounded w-100 h-100 justify content-center"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.38065723351!2d67.0234057743644!3d24.85084544564412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e75a28531d1%3A0x412558657f5ff4a8!2sGovernor%20House%20Sindh!5e0!3m2!1sen!2s!4v1730094659075!5m2!1sen!2s"
                
                style={{ minHeight: "350px", border: "0" ,justifyContent:"center"}}
                
                aria-hidden="false"
            
              ></iframe>
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form>
                  <div className="row g-3">
                    <div className="text-white block mb-2 text-sm font-medium">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label >Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text-white block mb-2 text-sm font-medium">
                        <input
                          type="email"
                          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                          id="email"
                          placeholder="jacob@google.com"
                        />
                        <label >Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="text-white block mb-2 text-sm font-medium">
                        <input
                          type="text"
                          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label >Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="text-white block mb-2 text-sm font-medium">
                        <textarea
                          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "150px" }}
                        ></textarea>
                        <label >Message</label>
                      </div>
                    </div>
                    <div className="col-12 container mx-auto md:px-20 py-16 text-center">
                      <button className="bg-blue-400 px-20 py-3 rounded-full text-gray-50 text-xl text-center" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
}
