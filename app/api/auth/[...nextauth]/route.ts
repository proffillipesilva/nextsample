import { authOptions } from "@/utils/authOptions";
import axios from "axios";
import NextAuth from "next-auth";



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };