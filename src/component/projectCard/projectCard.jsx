import React from "react";
import "./projectCard.styles.css";

const ProjectCard = (props) => {
    const {title} = props;
  return (
    <div className="pCard">
      <div className="imageBox">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
          alt=""
        />
      </div>
      <div className="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
        quia quod eum. Omnis corrupti id harum nisi, laboriosam molestiae
        facilis!
      </div>
      <div class="flex ml-2 mt-2">
        <img
          class="w-10 h-10 rounded-full mr-4"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
          alt={title}
        />
        <div class="text-sm">
          <p class="text-gray-900 leading-none">{title}</p>
          <p class="text-gray-600">React</p>
        </div>
      </div>
      <div className="options">
        <button className="rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 mb-3 ml-2 ">
          Check Live
        </button>
       
      </div>
    </div>
  );
};

export default ProjectCard;
