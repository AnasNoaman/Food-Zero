const allPosts = [
    {
      title: "Fruit and vegetables and protection against diseases",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "./assets/img/home/Feature.png",
      meta: "Julie Christie • October 17, 2021 • 3:33 pm • 2 comments",
      userimg: "./assets/img/home/Avatar (1).png"
    },
    {
      title: "Asparagus Spring Salad with Rocket, Goat's Cheese",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "./assets/img/home/Feature(1).png",
      meta: "Dianne Russell • October 17, 2021 • 3:33 pm • 2 comments",
      userimg: "./assets/img/home/Avatar.png"
    },
    {
      title: "The Best Style of Dough for Dumplings",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "./assets/img/blogs/Feature (2).png",
      meta: "Jericho Lopez • October 17, 2021 • 3:03 pm • 2 comments",
      userimg: "./assets/img/home/Avatar (1).png"
    },
    {
      title: "7 Reasons to Start Your Day With Lemon Water",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "./assets/img/blogs/Feature (3).png",
      meta: "Theresa Webb • October 17, 2021 • 3:33 pm • 2 comments",
      userimg: "./assets/img/home/Avatar.png"
    },
    {
      title: "Three Ideas for Cooking Goat Meat at Home",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "./assets/img/blogs/Feature (4).png",
      meta: "Cody Fisher • October 17, 2021 • 3:33 pm • 2 comments",
      userimg: "./assets/img/home/Avatar (1).png"
    },
    {
      title: "12 Sparkling Wines We're Loving This Summer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "./assets/img/blogs/Feature (5).png",
      meta: "Leslie Alexander • October 17, 2021 • 3:33 pm • 2 comments",
      userimg: "./assets/img/home/Avatar.png"
    }
  ];
  
  const postsPerPage = 2;
  let currentPage = 0;
  
  function renderPosts() {
    const container = document.getElementById("posts-container");
    const indicator = document.getElementById("page-indicator");
    container.innerHTML = "";
  
    const start = currentPage * postsPerPage;
    const end = start + postsPerPage;
    const postsToShow = allPosts.slice(start, end);
  
    postsToShow.forEach(post => {
      container.innerHTML += `
        <div class="col-12 col-md-6">
          <div class="blog-card">
            <div class="blogsec position-relative">
              <img src="${post.img}" class="img-fluid" alt="Food Image">
              <span class="fasion position-absolute top-0 end-0 m-3 text-white px-4 py-2">Fashion</span>
            </div>
            <div class="d-flex align-items-center mt-3">
              <img src="${post.userimg}" class="rounded-circle me-2" width="50" height="50" alt="Author">
              <small class="information">${post.meta}</small>
            </div>
            <h5 class="mt-3 fw-bold pb-2 border-dotted">${post.title}</h5>
            <p>${post.desc}</p>
            <a href="#" class="text-dark text-decoration-none fw-bold">Read More <span>→</span></a>
          </div>
        </div>
      `;
    });
  
    indicator.textContent = currentPage + 1;
  }
  
  function nextPage() {
    if ((currentPage + 1) * postsPerPage < allPosts.length) {
      currentPage++;
      renderPosts();
    }
  }
  
  function prevPage() {
    if (currentPage > 0) {
      currentPage--;
      renderPosts();
    }
  }
  
  window.onload = renderPosts;
  