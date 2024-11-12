import Footer from "../../components/Footer";
import Image from 'next/image'
import NewsLetter from "../../components/NewsLetter";
import Header from "../../components/Header"
import Comment   from "../CommentSection/page"

export default function Page(){
    return(
<div>
  <Header />
  <main className="font-bodyFont">
    <section className="container mx-auto md:px-2 py-16 w-1/2">
    
    <div className="post py-10">
        <h1 className="font-bold text-4xl text-center pb-05">Digital Minimalism: How to Improve Your Focus and Mental Clarity in the Age of Technology

        </h1>
        <p className="text-gray-600 text-xl text-center">In a world full of screens, notifications, and endless content, digital minimalism offers a refreshing approach. Digital minimalism encourages us to be intentional about our technology use, focusing on tools that add value and cutting out distractions. This blog explores the principles of digital minimalism and practical ways to achieve a more mindful tech life.



</p>
<div className="py-10">
  <img src={"/images/blogs/blog7.jpg"} width={900} height={600}></img>
</div>
<div className="content text-600 text lg flex flex-col gap-4">
    
   


<h3 className="font-bold text-2xl text-center pb-05 content text-black-600">Principles of Digital Minimalism

</h3>

<h4 className="font-bold text-xl">1. Use Technology with Intention</h4>
  <p  className="content text-grey-600 text lg flex flex-col gap-4">
 <p className="text-gray-600 text-lg">
 Assess each app or platform in your life. Is it helping you achieve your goals or just adding noise? Remove anything that doesn’t serve a meaningful purpose.
    </p> 
<h4 className="font-bold text-xl">2. Set Boundaries for Screen Time</h4>  
 <p className="text-gray-600 text-lg">Limit how much time you spend on screens daily. Consider using built-in phone tools to monitor screen time and set limits for specific apps.</p>
   <h4 className="font-bold text-xl"> 3. Reclaim Focus with Mindfulness Practices</h4> 
  
  <p className="text-gray-600 text-lg"> Practicing mindfulness can help reduce the urge to constantly check devices. Techniques like meditation and deep work intervals can improve focus and mental clarity.

</p>

  

<h3 className="font-bold text-2xl text-center pb-05 content text-black-600">Benefits of Digital Minimalism </h3>

<p  className="text-gray-600 text-lg">People who practice digital minimalism often experience reduced stress, better focus, and improved relationships. With fewer distractions, it’s easier to be present and engage fully with activities, both online and offline.




---</p>



 <h3 className="font-bold text-2xl text-center pb-05 content text-black-600">Conclusion</h3>

<p  className="text-gray-600 text-lg">Digital minimalism isn’t about rejecting technology but using it in ways that enrich our lives. By adopting mindful practices and setting clear boundaries, we can create a more balanced, fulfilling relationship with technology.





</p>  </p>
</div>
    </div>
    <Comment />
    </section>
<NewsLetter />
<Footer />
</main>
</div>

    )
}
