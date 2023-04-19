/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { describe, beforeEach, expect, test } from 'vitest';
import Header from '../components/Header';

describe('<Header />', () => {
	test('App mounts properly', () => {
		const wrapper = render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);
		expect(wrapper).toBeTruthy();
	});
});

describe('Header Component renders correctly', () => {
	beforeEach(() => {
		render(
			<Router>
				<Header />
			</Router>
		);
	});

	test('The Home section appears', async () => {
		await waitFor(() => {
			expect(screen.queryAllByText('Home'));
		});
	});
	test('The Create section appears', async () => {
		await waitFor(() => {
			expect(screen.queryAllByText('Create'));
		});
	});
});
