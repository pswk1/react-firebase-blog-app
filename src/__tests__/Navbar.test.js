/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { MemoryRouter } from 'react-router-dom';

describe('renders navbar components', () => {
	test('main heading typography to exist', async () => {
		const view = render(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>
		);

		const myBlog = await view.findByTestId('heading');
		expect(myBlog).toBeInTheDocument();

        const avatar = await view.findByTestId('avatar');
        expect(avatar).toBeInTheDocument();
	});
});
