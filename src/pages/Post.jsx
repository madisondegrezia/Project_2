import Container from '../components/Container';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

const Post = () => {
	const { id } = useParams();

	const [postData, setPostData] = useState({ id: {} });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const getPostData = async () => {
		const url = `http://localhost:3001/v1/api/posts/${id}`;
		setLoading(true);
		setError(false);
		try {
			const request = await fetch(url);
			const response = await request.json();
			setPostData(response);
		} catch (e) {
			setError('Error: ' + e.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getPostData();
	}, []);

	if (postData !== null) {
		return (
			<Container className="bg">
				{!error && !loading && (
					<div>
						<Link to={'/posts'}>
							<button
								type="button"
								className="b-btn text-sky-700 border border-sky-700 hover:bg-sky-200 hover:text-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
							>
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
								<span className="sr-only">Icon description</span>
							</button>
						</Link>
						<div className="text flex flex-col items-center bg-sky-100 border border-black rounded-lg shadow md:flex-row md:max-w-xl hover:bg-sky-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
							<div className="flex flex-col justify-between p-5 leading-normal">
								<p className="post mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
									{postData.title}
								</p>
								<p className="post">
									<i>by {postData.author}</i>
								</p>
								<br />
								<p className="post">{postData.content}</p>
								<br />
								<p className="post">
									<u>Published:</u> {postData.originally_published}
								</p>
								<p className="post">
									<u>Last Updated:</u> {postData.last_updated}
								</p>
								<Link to={`/posts/${postData.id}/edit`}>
									<div className="py-5">
										<a
											href="#_"
											className="relative inline-block px-4 py-2 font-medium group"
										>
											<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
											<span className="absolute inset-0 w-full h-full bg-sky-200 border-2 border-black group-hover:bg-black"></span>
											<span className="relative text-black group-hover:text-white">
												Edit Post
											</span>
										</a>
									</div>
								</Link>
								<Link to={`/posts/${postData.id}/delete`}>
									<div className="py-5">
										<a
											href="#_"
											className="relative inline-block px-4 py-2 font-medium group"
										>
											<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
											<span className="absolute inset-0 w-full h-full bg-sky-200 border-2 border-black group-hover:bg-black"></span>
											<span className="relative text-black group-hover:text-white">
												Delete Post
											</span>
										</a>
									</div>
								</Link>
							</div>
						</div>
					</div>
				)}
			</Container>
		);
	}
};

export default Post;
