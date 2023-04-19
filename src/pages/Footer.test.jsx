/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { describe, beforeEach, expect, test } from 'vitest';
import Footer from '../components/Footer';

describe('<Footer />', () => {
	test('App mounts properly', () => {
		const wrapper = render(
			<BrowserRouter>
				<Footer />
			</BrowserRouter>
		);
		expect(wrapper).toBeTruthy();
	});
});

describe('Footer Component renders correctly', () => {
	beforeEach(() => {
		render(
			<Router>
				<Footer />
			</Router>
		);
	});

	test('The copyright text appears', async () => {
		await waitFor(() => {
			expect(
				screen.queryAllByText('© 2023 WEBSITE AND DESIGN BY MADISON DEGREZIA')
			);
		});
	});
});
