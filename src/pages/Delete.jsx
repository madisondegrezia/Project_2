import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-loading-skeleton/dist/skeleton.css';
import '../index.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Delete = () => {
	const params = useParams();
	const [postInfo, setPostInfo] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [editing, setEditing] = useState(true);

	const getData = async () => {
		setLoading(true);
		setError(false);
		const url = `http://localhost:3001/v1/api/posts/${params['id']}`;

		try {
			const response = await axios.get(url);
			setPostInfo(response.data);

			console.log(JSON.stringify(response));
		} catch (e) {
			setError('Error: ' + e.message);
		} finally {
			setLoading(false);
		}
	};

	const deletePost = async () => {
		const url = `http://localhost:3001/v1/api/posts/${params['id']}`;
		axios.delete(url).then(function (response) {
			console.log(response);
		});
		setEditing(false);
	};

	useEffect(() => {
		getData();
	}, []);

	if (!editing) {
		return (
			<>
				{!error && !loading && (
					<div>
						<h1 className="text-xl mb-3">Your post has been deleted</h1>
						<Link to={'/posts'}>
							<div>
								<a
									href="#_"
									className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-sky-300 border-2 border-sky-300 rounded-full hover:text-white group hover:bg-gray-50"
								>
									<span className="absolute left-0 block w-full h-0 transition-all bg-sky-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
									<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
											/>
										</svg>
									</span>
									<span className="relative">Go Back</span>
								</a>
							</div>
						</Link>
					</div>
				)}
			</>
		);
	}

	return (
		<>
			<h1 className="font-bold">Are you sure you want to delete this post?</h1>
			<div>
				<div className="py-5" onClick={deletePost}>
					<a href="#_" className="relative inline-block px-4 py-2 font-medium group">
						<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
						<span className="absolute inset-0 w-full h-full bg-sky-200 border-2 border-black group-hover:bg-black"></span>
						<span className="relative text-black group-hover:text-white">
							Delete Post
						</span>
					</a>
				</div>

				<Link to={`/posts/${postInfo.id}`}>
					<div className="py-5" onClick={() => setEditing(false)}>
						<a
							href="#_"
							className="relative inline-block px-4 py-2 font-medium group"
						>
							<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
							<span className="absolute inset-0 w-full h-full bg-sky-200 border-2 border-black group-hover:bg-black"></span>
							<span className="relative text-black group-hover:text-white">
								Cancel
							</span>
						</a>
					</div>
				</Link>
			</div>
		</>
	);
};

export default Delete;
