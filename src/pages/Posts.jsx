import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorAlert from '../components/ErrorAlert';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';
import TheLatest from './TheLatest.png';
import '../index.css';

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const getData = async () => {
		const url = 'http://localhost:3001/v1/api/posts';
		setLoading(true);
		setError(false);
		try {
			const request = await fetch(url);
			const response = await request.json();
			setPosts(response);
		} catch (e) {
			setError('Error: ' + e.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

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
					{/* <h1 className="text-2xl font-bold text-center pb-4">
						<u>The Latest</u>
					</h1> */}
					<div className="flex">
						<img className="latest" src={TheLatest}></img>
					</div>

					{posts.map((post) => {
						return (
							<div className="posts" key={post.id}>
								<div className="flex justify-center text-center text-2xl relative group hover:text-sky-400 border">
									<Link id="a" to={`/posts/${post.id}`}>
										<b>{post.title}</b>
										<br />
										<div className="text-lg">
											<i>by {post.author}</i>
										</div>
									</Link>
									{/* hover effect */}
									<span className="absolute -bottom-1 left-1/5 w-0 h-2 bg-sky-300 group-hover:w-1/5 group-hover:transition-all"></span>
									<span className="absolute -bottom-1 right-1/5 w-0 h-2 bg-sky-300 group-hover:w-1/5 group-hover:transition-all"></span>
								</div>
								<br></br>
							</div>
						);
					})}
				</>
			)}
		</>
	);
};

export default Posts;
