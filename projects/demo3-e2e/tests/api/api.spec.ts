import { test, expect, APIResponse } from '@playwright/test';

test.describe('API tests for Practice Software Testing', () => {

    const TOTAL_PRODUCTS = 56;
    const PRODUCTS_PER_PAGE = 9;

    test('GET /products', async ({ request }) => {
        const apiUrl = 'https://api.practicesoftwaretesting.com';
        const response: APIResponse = await request.get(apiUrl + '/products');

        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.data.length).toBe(PRODUCTS_PER_PAGE);
        expect(body.total).toBe(TOTAL_PRODUCTS);
    });

    test('POST /users/login', async ({ request }) => {
        const apiUrl = 'https://api.practicesoftwaretesting.com';
        const response = await request.post(apiUrl + '/users/login', {
            data: {
                email: 'customer@practicesoftwaretesting.com',
                password: 'welcome01',
            },
        });

        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.access_token).toBeTruthy();
    });
});
