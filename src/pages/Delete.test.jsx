/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { describe, beforeEach, expect, test } from 'vitest';
import Delete from './Delete';

describe('<Delete />', () => {
	test('App mounts properly', () => {
		const wrapper = render(
			<BrowserRouter>
				<Delete />
			</BrowserRouter>
		);
		expect(wrapper).toBeTruthy();
	});
});

describe('Delete Component renders correctly', () => {
	beforeEach(() => {
		render(
			<Router>
				<Delete />
			</Router>
		);
	});

	test('The text "Delete" appears', async () => {
		await waitFor(() => {
			expect(screen.queryAllByText('Delete'));
		});
	});
});
