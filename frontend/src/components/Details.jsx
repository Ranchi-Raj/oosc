import { useState } from "react";
import { useSelector } from "react-redux";
export default function Component() {
    const user = useSelector((state) => state.counter.user);

    const fields = [
        { name: "Name", value: user.name },
        { name: "Address", value: user.address },
        { name: "DOB", value: user. },
        { name: "Father", value: "John" },
        { name: "Mother", value: "Jane" },
        { name: "AA", value: "AA123456" },
        { name: "PAN", value: "PAN123456" },
        { name: "PON", value: "PON123456" },
        { name: "Pass", value: "Pass123456" },
        { name: "Email", value: "example@example.com" }
    ];

    const [request, setRequest] = useState(0);

    function toggleDisplay() {
        setRequest(0);
    }

    function toggleRequest() {
        setRequest(1);
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="py-6 bg-white shadow">
                <h1 className="text-4xl font-bold text-gray-800 text-center">
                    Hello {user.name}
                </h1>
            </header>
            <div className="flex justify-center gap-4 py-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    onClick={toggleDisplay}
                >
                    Display Info
                </button>
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
                    onClick={toggleRequest}
                >
                    Request
                </button>
            </div>
            <main className="flex-grow container mx-auto mt-8 px-4 pb-8">
                <div className="bg-white shadow rounded-lg p-6">
                    {request === 0 ? (
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                {fields.map((field) => (
                                    <p key={field.name} className="text-sm font-medium text-gray-700 text-center">{field.name}</p>
                                ))}
                            </div>
                            <div className="space-y-2">
                                {fields.map((field) => (
                                    <p key={field.name} className="text-sm font-medium text-gray-700 text-center">{field.value}</p>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-gray-700">
                            <p className="text-xl font-medium">Request Mode Activated</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
