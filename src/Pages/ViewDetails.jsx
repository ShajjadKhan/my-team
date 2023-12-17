import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "../Components/Button";

export default function ViewDetails() {
  const loaderData = useLoaderData();
  return (
    <div className="textColor">
      <div className="row mt-3 flex justify-between">
        <div className="post-details w-[60%]  secondaryBg borderforrks p-2">
          <h1 className="text-4xl mb-3 mt-3 font-medium">
            Anaton - SaaS Landing Page WordPress
          </h1>
          <div className="post-img mb-3 p-[2px] primaryBg ">
            <img
              src="https://themeforest.img.customer.envatousercontent.com/files/469105743/preview/01_cover.__large_preview.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=2ced5f87492308b177ae41cd076e058e"
              alt=""
              className="w-full"
            />
          </div>
          <div className="post-description text-[#acacac] mb-3">
            {loaderData.body}
          </div>
          <div className="preview-button flex gap-5 flex-col">
            <Button btnName="Preview" />
            <Button btnName="Buy Now" />
          </div>
        </div>
        <div className="post-suggestion w-[38%] secondaryBg  borderforrks p-2">
          <h1 className="primaryColor text-xl">
            Price : <span className="text-[#acacac]">200Tk</span>
          </h1>
          <div className="post-content">
            <ul className="text-[#acacac] ml-5 ">
              <li>
                <span></span>Quality checked by Envato
              </li>
              <li>
                <span></span>Quality checked by Envato
              </li>
              <li>
                <span></span>Quality checked by Envato
              </li>
              <li>
                <span></span>Quality checked by Envato
              </li>
              <li>
                <span></span>Quality checked by Envato
              </li>
              <li>
                <span></span>Quality checked by Envato
              </li>
              <li>
                <span></span>Quality checked by Envato
              </li>
              <li>
                <span></span>Quality checked by Envato
              </li>
              <li>
                <span></span>Quality checked by Envato
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
