import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from "@/components/Login/Login"
import Registration from "@/components/registration/Registration"

function LoginRegistrationPage() {

  return (
    <Tabs defaultValue={"login"} className="" orientation="horizontal" >
        <TabsList className="my-10 mx-auto w-[40%] mt-[10%]">
            <TabsTrigger value='login' className="py-3 ">LOGIN</TabsTrigger>
            <TabsTrigger value='registration' className="py-3">REGISTRATION</TabsTrigger>
        </TabsList>
        <TabsContent value='login' className="w-[40%] mx-auto">
            <Login/>
        </TabsContent>
        <TabsContent value='registration' className="w-[40%] mx-auto">
            <Registration  />
        </TabsContent>
    </Tabs>
  )
}

export default LoginRegistrationPage