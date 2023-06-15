import React from 'react'
import "./News.css"
import './App.css';
import {Link} from 'react-router-dom';
function News() {
  return (
    <div>
   <div className="mainheader">
      <Link to='/news'>
      <p className="paraLink" style={{textDecoration:'none'}}>News</p>
      </Link>
      <Link to='/job'>
       <p className="paraLink"style={{textDecoration:'none'}}>Job</p>
       </Link>
       <Link to='/event'style={{textDecoration:'none'}}>
       <p className="paraLink">Event</p>
       </Link>
 
    </div>
     <div class="container" style={{marginTop:'100px'}}>
    <header>
    <h1 className="heading-1">the light star</h1>
    <div className="sub-heading">
      <p>Thursady, <span>june 15, 2023</span></p>
      <p className="importent">your right to know</p>
    </div>
    </header>

    <div className="main">
      <div className="home">
        <div className="left">
          <img src="news.jpg" className="home-img" alt="Paper photo"/>

          <h2 className="heading-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit cupiditate possimus.
          </h2>
        </div>

        <div className="right">
          <h3 className="heading-3">latest news</h3>
          <div className="lists">
            <div className="list">
              <img src="list-img-1.jpg" alt="photo 1"/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, veritatis!</p>
            </div>

            <div className="list">
              <img src="list-img-2.jpg" alt="photo 2"/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, veritatis!</p>
            </div>

            <div className="list">
              <img src="list-img-3.jpg" alt="photo 3"/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, veritatis!</p>
            </div>

            <div className="list">
              <img src="list-img-4.jpg" alt="photo 4"/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, veritatis!</p>
            </div>
          </div>
        </div>
      </div>

      <article>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit labore nihil voluptatum recusandae facere dicta veritatis iusto tempore, debitis officia qui nostrum repellendus autem numquam obcaecati sunt itaque in repudiandae expedita omnis saepe modi explicabo error! Sunt quaerat vitae omnis eaque culpa nihil sequi velit ullam fugiat, cupiditate atque quasi eum obcaecati, cumque officiis iure ipsam! Inventore voluptate dignissimos nemo! In exercitationem rerum sunt quo maxime consequatur ab accusamus explicabo voluptatem ratione. Eveniet hic, quibusdam repellendus illum quas provident corrupti dolores assumenda quis explicabo rerum reiciendis, tempore expedita iure ab numquam, facilis officia pariatur veritatis iste mollitia quam neque.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sint assumenda, alias blanditiis tempora quae, ea necessitatibus magnam velit culpa expedita optio voluptatem. Ad tenetur iure quisquam inventore! In sunt error quis magni quibusdam quos alias id odio eius eum, nostrum odit voluptates iste delectus harum labore nulla est quo?</p>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquid molestiae, dolore cupiditate iusto cumque et sit praesentium magni fuga! Saepe neque rerum, illo possimus quasi ipsum nostrum sapiente sequi harum asperiores unde pariatur officia magni tempore, ipsa molestias odit eligendi aspernatur sunt soluta dolores suscipit? Modi consectetur porro similique. Eaque magnam quae doloribus voluptates pariatur nulla beatae non tempore nisi, explicabo sequi. Quisquam blanditiis aliquam optio culpa! Placeat fugiat a aliquid fuga accusamus non minus reiciendis quia delectus! Maxime, facere laborum, reprehenderit aut obcaecati cumque cupiditate quam a ex consectetur velit ipsa? Repellat dolor voluptate esse, placeat eius veniam quae atque sapiente sunt autem. Quod ea ducimus illo voluptatum eveniet in assumenda voluptates veritatis numquam magnam consequuntur sunt explicabo, harum dolorum nostrum laborum fugiat velit! Perferendis consectetur totam voluptatem commodi sapiente quas? Modi voluptas laborum officia atque consequuntur quos ipsum incidunt vero corrupti fuga maiores, enim at ex dolores!</p>
      </article>
    </div>
  </div>

  <blockquote>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis nisi. Nisi, obcaecati sed. Doloremque omnis minima esse ullam cupiditate sint accusantium, itaque temporibus delectus commodi quidem atque id aut, nam, dolorum eligendi impedit. Porro labore dolore et accusamus, ea alias omnis eveniet dolor voluptate veritatis. Nisi assumenda perspiciatis facilis tenetur a ducimus atque dolorum. Non maiores porro minima incidunt quod deserunt ullam id error veniam debitis! Quia, nulla aspernatur.
  </blockquote>

  <div className="cards">
    <div className="card">
      <h4 className="heading-4">Title</h4>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis inventore consectetur eveniet assumenda, distinctio vero delectus. Dicta temporibus error rerum quas esse incidunt. Pariatur ea voluptatibus vitae distinctio cupiditate inventore!</p>
    </div>

    <div className="card">
      <h4 className="heading-4">Title</h4>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptate ullam exercitationem, optio doloribus, eius possimus modi odio esse nobis earum cumque quia perferendis quo. Distinctio ullam libero provident atque excepturi cupiditate, autem commodi tempora sed, consequuntur dolore corrupti reprehenderit.</p>
    </div>

    <div className="card">
      <h4 className="heading-4">Title</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam suscipit corrupti consequuntur nostrum illum alias accusantium sit magni. Eaque, libero soluta nam vitae sequi, sapiente quis, laboriosam numquam commodi aperiam vero. Voluptates libero delectus tenetur, quia ipsum magnam cumque numquam reiciendis. Alias architecto sit praesentium sapiente pariatur quas error fugiat?</p>
    </div>
  </div> 
    </div>
  )
}

export default News
