/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { describe, beforeEach, expect, test } from 'vitest';
import Create from './Create';

describe('<Create />', () => {
	test('App mounts properly', () => {
		const wrapper = render(
			<BrowserRouter>
				<Create />
			</BrowserRouter>
		);
		expect(wrapper).toBeTruthy();
	});
});

describe('Create Component renders correctly', () => {
	beforeEach(() => {
		render(
			<Router>
				<Create />
			</Router>
		);
	});

	test('The text "Upload Post" appears', async () => {
		await waitFor(() => {
			expect(screen.queryAllByText('Upload Post'));
		});
	});
});
