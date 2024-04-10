import { request } from '@playwright/test';
import { APP_URL } from '../test.data';

export class ContactsDelete {
    static async createBatchDelete(contactID: string, failOnStatusCode = true) {
        const context = await request.newContext();

        return await context.post(`${APP_URL}/REST/contactsDelete/v1/createBatchDelete`, {
            data: { contactIDs: [`${contactID}`] },
            failOnStatusCode: failOnStatusCode
        });
    }
}
