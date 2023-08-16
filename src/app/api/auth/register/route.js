import User from "@/Models/User"
import connect from "@/Utils/db"
import { NextResponse } from "next/server"

export const POST = async (request) => {
  const {name,email,password} = await request.json()

  await connect()

  const newUser = new User({
    name,
    email,
    password
  })

  
  try {
    await newUser.save()
    return new NextResponse("User Has Been Created", {
      status: 201
    })
  } catch (error) {
    return new NextResponse(error.massage, {
      status: 500
    })
  }
}