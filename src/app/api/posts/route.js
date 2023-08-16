import Post from "@/Models/Post"
import connect from "@/Utils/db"
import { NextResponse } from "next/server"

export const GET = async (request) => {
  const url = new URL(request.url)
  console.log(request.url)
  
  const username = url.searchParams.get("username") 

  try {
    console.log(await connect())
    await connect()

    const posts = await Post.find(username && { username })

    return new NextResponse(JSON.stringify(posts), { status:200 })

  } catch (error) {
    return new NextResponse(`Datatbase Error ${error}`, { status:500 })
  }
}

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};