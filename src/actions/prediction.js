"use server";
import { uploadImage } from "@/lib/cloudinary";
import { unstable_noStore as noStore } from "next/cache";

export async function createPrediction(formData) {
  noStore();

  try {
    const imageURL = await uploadImage(formData.get("image"));

    let prediction = await fetch("https://api.replicate.com/v1/predictions", {
      headers: {
        Authorization: `Bearer ${process.env.SECRET_TOKEN}`,
        accept: "application/json",
        "accept-language": "es-ES,es;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/json",
        pragma: "no-cache",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-csrftoken": "yn9TdFH5fc0SLlejf9pOwDgekiUccTAb",
      },
      referrer:
        "https://replicate.com/jagilley/controlnet-hough?prediction=1dbws2a4dxrj60cj22xazkmj94",
      referrerPolicy: "same-origin",
      body: `{"version":"854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56472a247b","input":{"eta":0,"image":${JSON.stringify(
        imageURL
      )},"scale":9,"prompt":${JSON.stringify(
        formData.get("prompt")
      )},"a_prompt":"best quality, extremely detailed","n_prompt":"longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality","ddim_steps":20,"num_samples":"1","value_threshold":0.1,"image_resolution":"512","detect_resolution":512,"distance_threshold":0.1}}`,
      method: "POST",
      mode: "cors",
      credentials: "include",
    }).then((res) => res.json());

    return prediction;
  } catch (error) {
    console.log(error);

    return { error: "An error occurred! Please try again later." };
  }
}

export async function getPrediction(id) {
  noStore();

  return fetch(`https://api.replicate.com/v1/predictions/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.SECRET_TOKEN}`,
      accept: "*/*",
      "accept-language": "es-ES,es;q=0.9",
      "cache-control": "no-cache",
      pragma: "no-cache",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
    referrer:
      "https://replicate.com/jagilley/controlnet-hough?prediction=fkq7nvsrnxrj00cj235b2mygmw",
    referrerPolicy: "same-origin",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include",
  }).then((res) => res.json());
}
