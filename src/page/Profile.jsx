import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useSelector } from "react-redux";

export function Profile() {
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const [form, setForm] = useState({
        fullname: "",
        email: "",
        phone: "",
        address: "",
        password: "",
    });

    const token = useSelector((state) => state.authReducers.token);

    useEffect(() => {
        async function getUser() {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                const result = await response.json();
                console.log(result);

                if (result.Success) {
                    setUser(result.Data);

                    setForm({
                        fullname: result.Data.fullname,
                        email: result.Data.email,
                        phone: result.Data.phone,
                        address: result.Data.address,
                        password: "",
                    });
                }
            } catch (error) {
                console.error(error);
            }
        }

        getUser();
    }, [token]);

    console.log(user)

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function handleImageChange(e) {
        setImageFile(e.target.files[0]);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("data", JSON.stringify(form));

        if (imageFile) {
            formData.append("pic", imageFile);
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
                body: formData,
            });

            const result = await response.json();
            console.log("UPDATE RESULT:", result);

            if (result.Success) {
                alert("Profile updated successfully!");
            } else {
                alert(result.Message);
            }
        } catch (error) {
            console.error(error);
            alert("Error updating profile");
        }
    }

    if (!user) return <p>Loading...</p>;

    return (
        <>
            <div className="pt-30 p-5 gap-5 flex flex-col">
                <h1 className="text-2xl font-semibold">Profile</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="flex flex-col items-center gap-4 border border-gray-200 rounded-md p-3 col-span-1 h-fit">
                        <h2 className="text-[#0B132A] text-lg">{user.fullname}</h2>
                        <p className="text-sm">{user.email}</p>

                        <img
                            src={user.pic}
                            alt="profile"
                            className="w-20 rounded-full"
                        />

                        <input
                            type="file"
                            id="uploadPic"
                            className="hidden"
                            onChange={handleImageChange}
                        />

                        <label htmlFor="uploadPic" className="w-sm rounded-lg flex items-center  justify-center py-2 bg-[#FF8906]">
                        Upload New Photo
                        </label>

                        <p className="text-sm text-[#4F5665]">
                            Since {new Date(user.createdAt).toLocaleDateString()}
                        </p>
                    </div>

                    <form
                        className="flex flex-col items-center gap-5 border border-gray-200 rounded-md p-2 col-span-2"
                        onSubmit={handleSubmit}
                    >
                        <Input
                            label="Fullname"
                            name="fullname"
                            type="text"
                            value={form.fullname}
                            onChange={handleChange}
                            placeholder="Enter Your Fullname"
                        />

                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter Your Email"
                        />

                        <Input
                            label="Phone"
                            name="phone"
                            type="text"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Enter Your Phone"
                        />

                        <div className="w-full">
                            <p className="text-end text-sm text-[#FF8906]">Set New Password</p>

                            <Input
                                label="Password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter New Password"
                                rightIcon={
                                    <svg
                                        onClick={() => setShowPassword(!showPassword)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 cursor-pointer"
                                    >
                                        {showPassword ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.7 10.7A2 2 0 0112 10a2 2 0 012 2c0 .3-.06.6-.17.86M14.3 14.3A2 2 0 0112 16a2 2 0 01-2-2c0-.3.06-.6.17-.86" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12s4.5-7.5 10.5-7.5S22.5 12 22.5 12s-4.5 7.5-10.5 7.5S1.5 12 1.5 12zm10.5 3a3 3 0 100-6 3 3 0 000 6z" />
                                        )}
                                    </svg>
                                }
                            />
                        </div>

                        <Input
                            label="Address"
                            name="address"
                            type="text"
                            value={form.address}
                            onChange={handleChange}
                            placeholder="Enter Your Address"
                        />

                        <Button style={" bg-[#FF8906] items-center w-full text-sm py-3"}>
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}