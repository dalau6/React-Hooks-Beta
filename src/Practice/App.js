import React from "react";
import "./styles.css";

export default function App ({ posts }) {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <ul>
      {posts.map(({ id, img, text }, index) => {
        const isOpen = openIndex === index

        const textToShow = isOpen ? text : `${text.substring(0, 100)}...`;

        return (
          <li key={id} style={{border: isOpen ? "1px solid black" : "none"}}>
            <img src={img} alt="Post avatar" />
            <p>{textToShow}</p>
            {!isOpen && (
              <button onClick={() => setOpenIndex(index)}>
                Open
              </button>
            )}
          </li>
        )
      })}
    </ul>
  )
}
