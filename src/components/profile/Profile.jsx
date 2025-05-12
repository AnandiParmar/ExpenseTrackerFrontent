import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import { Input } from "../ui/input";
import { getUserData } from "@/store/features/user/userActions";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserData } from "@/store/features/user/userActions";
import { useEffect } from "react";

function Profile() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    console.log("use Effect");
    dispatch(getUserData()).then((result) => {
      setUserData(result.payload.data);
      console.log("result ===============", result);
    });
  }, [dispatch]);

  console.log("userData", userData);

  function handleProfileChange(e) {
    e.preventDefault();
    const formData = new FormData();
    const id = userData._id;

    if (userData.profile_image instanceof File) {
      formData.append("profile_image", userData.profile_image);
    }
    formData.append("name", userData.name);
    formData.append("phone", userData.phone);
    dispatch(updateUserData({ id, formData }));
  }

  function handleImageChange(e) {
    setUserData({ ...userData, profile_image: e.target.files[0] });
  }
  return (
    <Sheet>
      <SheetTrigger>
        <img
          src={
            userData.profile_image
              ? userData.profile_image instanceof File
                ? URL.createObjectURL(userData.profile_image)
                : `http://localhost:3000/${userData.profile_image}`
              : `/user.png`
          }
          alt=""
          className="h-[40px] w-[40px]"
        />
      </SheetTrigger>
      <SheetContent className="bg-white w-[30%]">
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <form
          className="grid gap-4 py-4"
          encType="multipart/form-data"
          method="put"
          onSubmit={handleProfileChange}
        >
          <div className="grid grid-cols-4  gap-4 pl-3 items-center">
            <img
              src={
                userData.profile_image
                  ? userData.profile_image instanceof File
                    ? URL.createObjectURL(userData.profile_image)
                    : `http://localhost:3000/${userData.profile_image}`
                  : `/user.png`
              }
              alt=""
              className="pl-3"
            />
            <input
              type="file"
              name="profile_image"
              id="profile_image"
              className="col-span-2 w-[80px]"
              onChange={handleImageChange}
            />
          </div>
          <div className="grid grid-cols-4  gap-4 pr-3 items-center">
            <Label htmlFor="name" className="text-left pl-3">
              Name
            </Label>
            <Input
              id="name"
              value={userData?.name}
              className="col-span-3 "
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-4  gap-4 pr-3 items-center">
            <Label htmlFor="phone" className="text-left pl-3">
              Phone no
            </Label>
            <Input
              id="phone"
              value={userData?.phone}
              className="col-span-3 pr-3"
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
          </div>
          <SheetFooter className="block">
            <SheetClose asChild>
              <Button type="submit" className="bg-dark rounded text-white ">
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}

export default Profile;
