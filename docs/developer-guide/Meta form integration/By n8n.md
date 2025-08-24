# By n8n

# Public Lead API — Integration with n8n

This guide explains how to integrate the **Public Lead API** into **n8n**.
Unlike Make.com, which is very user-friendly, n8n often requires some **technical or developer experience**. You may need to configure API credentials manually (Client ID, Client Secret, etc.).

---

## Important Notes

- **TikTok Lead Ads**: currently **not available** in n8n.
- **Meta (Facebook/Instagram)** and **Google Sheets** are supported with proper credentials.
- You will still need to use an **HTTP Request node** to send data to the Public Lead API.

---

## Meta (Facebook Lead Ads) → Public Lead API

1. **Search for Facebook Lead Ads Trigger**

   - In n8n, add a node: **Facebook Lead Ads Trigger**.

2. **Set up Credentials**

   - In the node’s **Credentials** section, click **Create New**.
   - You must have a **Meta Developer Account** and a registered **App**.
   - From your Meta App, copy:

     - **Client ID**
     - **Client Secret**

   - Paste them into the n8n credentials fields.
   - Save the credentials.
   - Click **Connect**. A login window will appear to sign in with your Meta account.
   - After signing in, save the connection.

3. **Choose Page and Form**

   - Back in the node, select the **Page** and **Form** you want to listen to.
   - The trigger will now capture new leads.

4. **Send to Public Lead API**

   - Add an **HTTP Request** node.

   - Configure it:

     - **Method**: `POST`
     - **URL**: `your-domain/api/create-lead`
     - **Response Format**: `JSON`

   - In the **Body Parameters**, paste the JSON schema:

     ```json
     {
       "organizationId": "",
       "name": "",
       "sourceMethod": "",
       "phone": "",
       "email": "",
       "comments": [],
       "info": {},
       "mainSourceId": "",
       "mainSourceName": "",
       "campaignId": "",
       "campaignName": "",
       "adGroupId": "",
       "adGroupName": "",
       "adId": "",
       "adName": ""
     }
     ```

   - Map the fields from the **Facebook Lead Ads Trigger** into the correct JSON keys.

---
