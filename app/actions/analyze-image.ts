"use client"

import api from "@/lib/axios"


export async function analyzeImage(formData: FormData) {
  const imageFile = formData.get("image") as File

  if (!imageFile) {
    return {
      success: false,
      message: "No image provided",
    }
  }
  console.log("data",imageFile)

  try {
    const response = await api.post("/upload-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    console.log(response)

    const data = response.data
    return {
      success: true,
      results: data,
      analysis: 'This appears to be a packaged food product with nutritional content.',
    }
  } catch (error: any) {
    console.error("Error analyzing image:", error?.response || error)
    return {
      success: false,
      message: "Failed to analyze image. Please try again.",
    }
  }
}
