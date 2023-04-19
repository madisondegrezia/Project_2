/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { describe, beforeEach, expect, test } from 'vitest';
import Edit from './Edit';

describe('<Edit />', () => {
	test('App mounts properly', () => {
		const wrapper = render(
			<BrowserRouter>
				<Edit />
			</BrowserRouter>
		);
		expect(wrapper).toBeTruthy();
	});
});

describe('Edit Component renders correctly', () => {
	beforeEach(() => {
		render(
			<Router>
				<Edit />
			</Router>
		);
	});

	test('The text "Edit Post" appears', async () => {
		await waitFor(() => {
			expect(screen.queryAllByText('Edit Post'));
		});
	});
});
