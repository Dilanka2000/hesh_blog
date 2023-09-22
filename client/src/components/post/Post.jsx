import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img 
          className="postImg" 
          src="https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518__340.jpg" 
          alt="" 
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">
            Lorem ipsum dolor sit amet
          </span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic maxime dignissimos fugiat, dolor, reiciendis architecto commodi tempore eligendi quos veritatis pariatur quisquam? Rerum tempora quia voluptas, quidem numquam architecto ducimus.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic maxime dignissimos fugiat, dolor, reiciendis architecto commodi tempore eligendi quos veritatis pariatur quisquam? Rerum tempora quia voluptas, quidem numquam architecto ducimus.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic maxime dignissimos fugiat, dolor, reiciendis architecto commodi tempore eligendi quos veritatis pariatur quisquam? Rerum tempora quia voluptas, quidem numquam architecto ducimus.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic maxime dignissimos fugiat, dolor, reiciendis architecto commodi tempore eligendi quos veritatis pariatur quisquam? Rerum tempora quia voluptas, quidem numquam architecto ducimus.
        </p>
    </div>
  );
}
