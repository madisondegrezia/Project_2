import { Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Create from './pages/Create';
import NotFound from './pages/NotFound';
import './App.css';
import './index.css';
import Post from './pages/Post';
import Posts from './pages/Posts';
import Edit from './pages/Edit';
import Delete from './pages/Delete';
import React from 'react';

function App() {
	return (
		<>
			<Header />
			<Container>
				<Routes>
					<Route index element={<Home />}></Route>
					<Route path="/Create" element={<Create />}></Route>
					<Route path="/posts/:id" element={<Post />}></Route>
					<Route path="/posts/:id/edit" element={<Edit />}></Route>
					<Route path="/posts/:id/delete" element={<Delete />}></Route>
					<Route path="/posts" element={<Posts />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</Container>
			<Footer />
		</>
	);
}

export default App;
