import React from "react";

import './BlogStyle.css';
import blog1 from "../Blog/images/blog1.jpg";
import blog2 from "../Blog/images/blog2.jpg";
import blog3 from "../Blog/images/blog3.jpg";
import blog4 from "../Blog/images/blog4.jpg";
import blog5 from "../Blog/images/blog5.jpg";
import blog6 from "../Blog/images/blog6.jpg";
import blog7 from "../Blog/images/blog7.jpg";
import blog8 from "../Blog/images/blog8.jpg";
import blog9 from "../Blog/images/blog9.jpg";
import blog10 from "../Blog/images/blog10.jpg";

function Blog() {
  return (
    <section className="BlogSection">
    <div className="container" style={{ marginTop: "100px" }}>
      {/* الصف الأول: صورة كبيرة يسار وأربع صغيرة يمين */}
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4 gap-3">
          <img src={blog1} className="blog-image" alt="Main Blog" style={{height: '520px'}} />
          <a href="#"> No Bad Blood! The Reason Why Tamr Judge Finally Made Up With...</a>
          <p className="lead">by Ema Timahe | Sep 17, 2030</p>

        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-6 mb-4 gap-3">
              <img src={blog2} className="blog-image img-fluid" alt=""/>
              <a href="#">Amf Cannes Red Carpet Celebrities Kendall Jenner, Pamela...</a>
              <p className="lead">by Ema Timahe | Sep 17, 2030</p>
            </div>
            <div className="col-6 mb-4 gap-3">
              <img src={blog3} className="blog-image img-fluid" alt=""/>
              <a href="#">Gigi Hadid, Rita Ora, Serena & Other Hot Celebs Stun At 2030...</a>
              <p className="lead">by Ema Timahe | Sep 17, 2030</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6 mb-4 gap-3">
              <img src={blog4} className="blog-image img-fluid" alt=""/>
              <a href="#">Amf Cannes Red Carpet Celebrities Kendall Jenner, Pamela...</a>
              <p className="lead">by Ema Timahe | Sep 17, 2030</p>
            </div>
            <div className="col-6 mb-4 gap-3">
              <img src={blog5} className="blog-image img-fluid" alt=""/>
              <a href="#"><a href="#">Billboard Music Awards: Best, Worst & Wackiest Dresses On The...</a>
              <p className="lead">by Ema Timahe | Sep 17, 2030</p></a>
            </div>
          </div>
        </div>
      </div>

      {/* الصف الثاني: عكس الأول (أربع صغيرة يسار وصورة كبيرة يمين) */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="row">
            <div className="col-6 mb-4 gap-3">
              <img src={blog10} className="blog-image img-fluid" alt="" />
              <a href="#">Stephanie Pratt Busts Out Of Teeny Black Bikini During Hawaii...</a>
              <p className="lead">by Ema Timahe | Sep 17, 2030</p>
            </div>
            <div className="col-6 mb-4 gap-3">
              <img src={blog7} className="blog-image img-fluid" alt="" />
              <a href="#">Pot Party! See Farrah Abraham Flaunt Smoking Body At...</a>
              <p className="lead">by Ema Timahe | Sep 17, 2030</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6 mb-4 gap-3">
              <img src={blog8} className="blog-image img-fluid" alt="" />
             <div className="textAlt"></div> <a href="#">A-list Battle! Angelina Jolie & Lady Gaga Fighting Over Who...</a>
              <p className="lead">by Ema Timahe | Sep 17, 2030</p>
            </div>
            
            <div className="col-6 mb-4 gap-3">
              <img src={blog9} className="blog-image img-fluid" alt="" />
              <div className="textAlt"><a href="#">CMT Awards 2030 Red Carpet Arrivals Carrie Underwood, Sheryl...</a>
              <p className="lead">by Ema Timahe | Sep 17, 2030</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4 gap-3">
          <img src={blog6} className="blog-image img-fluid" alt="" style={{height: '520px'}} />
          <div className="textAlt"><a href="#">Stephanie Pratt Busts Out Of Teeny Black Bikini During Hawaii...</a>
              <p className="lead">by Ema Timahe | Sep 17, 2030</p>
              </div>
        </div>
      </div>
    </div>
    <div className="text-center">
        <span>-----------------</span>
          <button className="loadMore fs-3 btn btn-secondary">Load More</button>
          <span>-----------------</span>
</div>
    </section>
  );
}
export default Blog;