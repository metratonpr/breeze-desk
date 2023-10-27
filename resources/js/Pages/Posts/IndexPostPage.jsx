import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/react";
import { Head, usePage, Link } from "@inertiajs/react";

export default function IndexPostPage(props) {
    const { posts } = usePage().props;

    function destroy(e) {
        if (confirm("Voce deseja excluir este Post?")) {
            Inertia.delete(route("posts.destroy"), e.currentTarget.id);
        }
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Posts
                </h2>
            }
        >
            <Head title="Posts" />
            <div className="py-12">
                <div className="max-w-7x1 mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={route("posts.create")}
                                >
                                    Create Post
                                </Link>
                            </div>
                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-20">No.</th>
                                        <th className="px-4 py-2">Title.</th>
                                        <th className="px-4 py-2">Content.</th>
                                        <th className="px-4 py-2">
                                            Featured Image
                                        </th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts.map(
                                        ({
                                            id,
                                            title,
                                            content,
                                            featured_image,
                                        }) => (
                                            <tr>
                                                <td className="border px-4 py-2">
                                                    {id}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {title}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {content}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {featured_image}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    <Link
                                                        tabIndex="1"
                                                        className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                        href={route(
                                                            "posts.edit",
                                                            id
                                                        )}
                                                    >
                                                        Editar
                                                    </Link>
                                                    <button
                                                        onClick={destroy}
                                                        id={id}
                                                        tabIndex="-1"
                                                        className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    )}
                                    {posts.length === 0 && (
                                        <tr>
                                            <td className="px-6 py-4 border-t">
                                                Não existem Posts
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
