import React from "react";
import ReactDOM from "react-dom";

const para = {
  position: "fixed",
  bottom: "0",
  border: "2px solid black",
  color: "rgba(0, 0, 0, .8)",
  fontWeight: "600",
  padding: "1rem",
  width: "100%"
}

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">My Favourite Foods</h1>
    <ul>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.r6T2zRnyrrP8LdtOEaGVowHaGl%26pid%3DApi&f=1&ipt=3018fb15d4e38ddaf7f7f9a3d89f15b5b4cf714d753854f6d3b958e095d07feb&ipo=images" alt="Chicken Biryani" />
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.vZ-4v_YleLHmz_Y126Oc8QHaEK%26pid%3DApi&f=1&ipt=775ed612eaeb656e3afd742f27385d52cc5f0de9b82e5fab1fc1502351615ad2&ipo=images" alt="Chhole Bhature" />
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Nerh109-N1S1ETUf51j4NgHaE8%26pid%3DApi&f=1&ipt=3ccc8772f52636ceed3010f859504be4f9eb69082b13613ec2d041318fcc0501&ipo=images" alt="Mushroom Chowmein" />
    </ul>

    <p style={para}>Made with ❤️ by Shivam Oraon. Copyright 2024.</p>
  </div>,
  document.getElementById("root")
);

