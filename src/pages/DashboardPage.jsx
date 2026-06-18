import React, { useState } from "react";
import {
    Package,
    ShoppingCart,
    Users,
    DollarSign,
    Moon,
    Sun,
} from "lucide-react";

export default function Dashboard() {
    const [dark, setDark] = useState(false);

    const stats = [
        {
            title: "Products",
            value: "245",
            icon: <Package size={24} />,
            color: "from-blue-500 to-cyan-500",
        },
        {
            title: "Orders",
            value: "1,245",
            icon: <ShoppingCart size={24} />,
            color: "from-green-500 to-emerald-500",
        },
        {
            title: "Customers",
            value: "892",
            icon: <Users size={24} />,
            color: "from-purple-500 to-pink-500",
        },
        {
            title: "Revenue",
            value: "$12,450",
            icon: <DollarSign size={24} />,
            color: "from-orange-500 to-red-500",
        },
    ];

    // Key-value data array used dynamically below
    const tbData = [
        { id: "#1001", name: "John Doe", status: "Completed", amount: "$250" },
        { id: "#1002", name: "Jane Smith", status: "Pending", amount: "$120" },
        { id: "#1003", name: "Alex Kim", status: "Completed", amount: "$450" },
        { id: "#1004", name: "David Lee", status: "Processing", amount: "$90" }
    ];

    return (
        <div className={dark ? "dark" : ""}>
            <div className="min-h-screen bg-slate-50 p-6 transition-colors dark:bg-slate-900">

                {/* Header with Dark Mode Toggle */}
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
                            Dashboard
                        </h1>
                        <p className="text-slate-500 dark:text-slate-300">
                            Welcome back, Admin 👋
                        </p>
                    </div>
                    <button 
                        onClick={() => setDark(!dark)} 
                        className="rounded-lg p-2 bg-white shadow-sm border border-slate-200 dark:bg-slate-800 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                    >
                        {dark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Stats */}
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:bg-slate-800"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        {item.title}
                                    </p>
                                    <h2 className="mt-2 text-3xl font-bold text-slate-800 dark:text-white">
                                        {item.value}
                                    </h2>
                                </div>

                                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-white`}>
                                    {item.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chart + Activity */}
                <div className="mt-8 grid gap-6 lg:grid-cols-3">

                    {/* Chart */}
                    <div className="rounded-xl bg-white p-6 shadow-sm lg:col-span-2 dark:bg-slate-800">
                        <h2 className="mb-4 text-xl font-semibold text-slate-800 dark:text-white">
                            Sales Overview
                        </h2> 
                        <div className="flex h-80 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-700">
                            <span className="text-slate-400">Chart Area</span>
                        </div>
                    </div>

                    {/* Activity (Fixed Object Mapping) */}
                    <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-800">
                        <h2 className="mb-5 text-xl font-semibold text-slate-800 dark:text-white">
                            Recent Activity
                        </h2> 

                        <div className="space-y-5">
                            {tbData.map((item) => (
                                <div key={item.id} className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                    <p className="text-sm text-slate-600 dark:text-slate-300">
                                        Order <span className="font-semibold">{item.id}</span> placed by {item.name} ({item.status})
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Table (Refactored to map the tbData objects) */}
                <div className="mt-8 rounded-xl bg-white p-6 shadow-sm dark:bg-slate-800">
                    <h2 className="mb-4 text-xl font-semibold text-slate-800 dark:text-white">
                        Recent Orders
                    </h2> 

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b text-left text-slate-500 dark:text-slate-400">
                                    <th className="py-4">Order ID</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                </tr>
                            </thead>

                            <tbody className="text-slate-700 dark:text-slate-200">
                                {tbData.map((row) => (
                                    <tr
                                        key={row.id}
                                        className="border-b border-gray-100 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-700/50"
                                    >
                                        <td className="py-4 font-medium">{row.id}</td>
                                        <td>{row.name}</td>
                                        <td>
                                            <span className={`rounded-full px-3 py-1 text-xs font-medium
                                                ${row.status === "Completed" ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" : ""}
                                                ${row.status === "Pending" ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" : ""}
                                                ${row.status === "Processing" ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" : ""}
                                            `}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="font-medium">{row.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}