import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../index.css';
import ErrorAlert from '../components/ErrorAlert';
import { Link } from 'react-router-dom';

const Create = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [author, setAuthor] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const postContent = async () => {
		const url = 'http://localhost:3001/v1/api/posts';
		setError(false);
		axios
			.post(url, {
				title: title,
				author: author,
				content: content,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (e) {
				setError('Error: ' + e.message);
			});

		setTitle('');
		setAuthor('');
		setContent('');
		setLoading(false);
	};

	return (
		<>
			{error && <ErrorAlert>{error}</ErrorAlert>}
			{!error && loading && (
				<div className="max-w-[230px]">
					<Skeleton count="10" />
				</div>
			)}
			{!error && !loading && (
				<>
					<div className="create">
						<h1 className="font-bold underline text-2xl">Create a New Post</h1>
						<Link to={'/posts'}>
							<button
								type="button"
								className="b-btn2 text-sky-700 border border-sky-700 hover:bg-sky-200 hover:text-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
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
						<form>
							<label>
								<h2>Title</h2>
							</label>
							<input
								type="text"
								size="35"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
							<label>
								<h2>Author</h2>
							</label>
							<input
								type="text"
								size="35"
								value={author}
								onChange={(e) => setAuthor(e.target.value)}
							/>
							<label>
								<h2>Post Content</h2>
							</label>
							<textarea
								type="text"
								value={content}
								className="input"
								onChange={(e) => setContent(e.target.value)}
							/>
						</form>
					</div>
					<div>
						<br />
						<br />
						<div className="btn" onClick={postContent}>
							<a
								href="#_"
								className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-sky-300 transition duration-300 ease-out border-2 border-sky-300 rounded-full shadow-md group"
							>
								<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-sky-300 group-hover:translate-x-0 ease">
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										></path>
									</svg>
								</span>
								<span className="absolute flex items-center justify-center w-full h-full text-sky-300 transition-all duration-300 transform group-hover:translate-x-full ease">
									Upload Post
								</span>
								<span className="relative invisible">Upload Post</span>
							</a>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Create;
